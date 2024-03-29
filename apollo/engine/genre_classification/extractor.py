import os

import librosa
import matplotlib as plt
import numpy as np
import tensorflow as tf
from matplotlib.figure import Figure

from apollo.engine.genre_classification import configuration as config
from apollo.engine.genre_classification import models

# disable eager mode for tf.v1 compatibility with tf.v2
tf.compat.v1.disable_eager_execution()


def batch_data(audio_file, n_frames, overlap):
    # compute the log-mel spectrogram with librosa
    audio, sr = librosa.load(audio_file, sr=config.SR)
    audio_rep = librosa.feature.melspectrogram(y=audio,
                                               sr=sr,
                                               hop_length=config.FFT_HOP,
                                               n_fft=config.FFT_SIZE,
                                               n_mels=config.N_MELS).T
    audio_rep = audio_rep.astype(np.float16)
    audio_rep = np.log10(10000 * audio_rep + 1)

    # batch it for an efficient computing
    first = True
    last_frame = audio_rep.shape[0] - n_frames + 1
    # +1 is to include the last frame that range would not include
    for time_stamp in range(0, last_frame, overlap):
        patch = np.expand_dims(audio_rep[time_stamp: time_stamp + n_frames, :], axis=0)
        if first:
            batch = patch
            first = False
        else:
            batch = np.concatenate((batch, patch), axis=0)

    return batch, audio_rep


def extractor(file_name, output_folder, model='MSD_musicnn', input_length=3, input_overlap=False,
              extract_features=True):
    # select model
    labels = config.MSD_LABELS
    num_classes = len(labels)

    # convert seconds to frames
    n_frames = librosa.time_to_frames(input_length, sr=config.SR, n_fft=config.FFT_SIZE, hop_length=config.FFT_HOP) + 1
    if not input_overlap:
        overlap = n_frames
    else:
        overlap = librosa.time_to_frames(input_overlap, sr=config.SR, n_fft=config.FFT_SIZE, hop_length=config.FFT_HOP)

    # tensorflow: define the model
    tf.compat.v1.reset_default_graph()
    with tf.name_scope('model'):
        x = tf.compat.v1.placeholder(tf.float32, [None, n_frames, config.N_MELS])
        is_training = tf.compat.v1.placeholder(tf.bool)
        y, timbral, temporal, cnn1, cnn2, cnn3, mean_pool, max_pool, penultimate = models.define_model(x,
                                                                                                       is_training,
                                                                                                       model,
                                                                                                       num_classes)
        normalized_y = tf.nn.sigmoid(y)

    # tensorflow: loading model
    sess = tf.compat.v1.Session()
    sess.run(tf.compat.v1.global_variables_initializer())
    saver = tf.compat.v1.train.Saver()
    saver.restore(sess, os.path.dirname(__file__) + '/' + model + '/')

    # batching data
    print('Computing spectrogram (w/ librosa) and tags (w/ tensorflow)..', end=" ")
    batch, spectrogram = batch_data(file_name, n_frames, overlap)

    # tensorflow: extract features and tags
    # ..first batch!
    if extract_features:
        extract_vector = [normalized_y, timbral, temporal, cnn1, cnn2, cnn3, mean_pool, max_pool, penultimate]
    else:
        extract_vector = [normalized_y]

    tf_out = sess.run(extract_vector,
                      feed_dict={x: batch[:config.BATCH_SIZE],
                                 is_training: False})

    if extract_features:
        predicted_tags, timbral_, temporal_, cnn1_, cnn2_, cnn3_, mean_pool_, max_pool_, penultimate_ = tf_out
        features = dict()
        features['timbral'] = np.squeeze(timbral_)
        features['temporal'] = np.squeeze(temporal_)
        features['cnn1'] = np.squeeze(cnn1_)
        features['cnn2'] = np.squeeze(cnn2_)
        features['cnn3'] = np.squeeze(cnn3_)
        features['mean_pool'] = mean_pool_
        features['max_pool'] = max_pool_
        features['penultimate'] = penultimate_
    else:
        predicted_tags = tf_out[0]

    taggram = np.array(predicted_tags)

    # ..rest of the batches!
    for id_pointer in range(config.BATCH_SIZE, batch.shape[0], config.BATCH_SIZE):

        tf_out = sess.run(extract_vector,
                          feed_dict={x: batch[id_pointer:id_pointer + config.BATCH_SIZE],
                                     is_training: False})

        if extract_features:
            predicted_tags, timbral_, temporal_, midend1_, midend2_, midend3_, mean_pool_, max_pool_, penultimate_ = tf_out
            features['timbral'] = np.concatenate((features['timbral'], np.squeeze(timbral_)), axis=0)
            features['temporal'] = np.concatenate((features['temporal'], np.squeeze(temporal_)), axis=0)
            features['cnn1'] = np.concatenate((features['cnn1'], np.squeeze(cnn1_)), axis=0)
            features['cnn2'] = np.concatenate((features['cnn2'], np.squeeze(cnn2_)), axis=0)
            features['cnn3'] = np.concatenate((features['cnn3'], np.squeeze(cnn3_)), axis=0)
            features['mean_pool'] = np.concatenate((features['mean_pool'], mean_pool_), axis=0)
            features['max_pool'] = np.concatenate((features['max_pool'], max_pool_), axis=0)
            features['penultimate'] = np.concatenate((features['penultimate'], penultimate_), axis=0)
        else:
            predicted_tags = tf_out[0]

        taggram = np.concatenate((taggram, np.array(predicted_tags)), axis=0)

    sess.close()

    plotter(input_length, taggram, labels, output_folder, file_name)


def plotter(input_length, taggram, tags, output_folder, file_name):
    plt.rcParams['text.color'] = 'white'
    fontsize = 12  # set figures font size

    # Plot Taggram for the labels
    fig = Figure(figsize=(60, 15))
    ax = fig.subplots()
    ax.set_xlabel('(seconds)', fontsize=fontsize)
    # y-axis
    y_pos = np.arange(len(tags))
    ax.set_yticks(y_pos)
    ax.set_yticklabels(tags, fontsize=fontsize - 1)
    # x-axis
    x_pos = np.arange(taggram.shape[0])
    x_label = np.arange(input_length / 2, input_length * taggram.shape[0], 3)
    ax.set_xticks(x_pos)
    ax.set_xticklabels(x_label, fontsize=fontsize)
    # depict taggram
    ax.imshow(taggram.T, interpolation=None, aspect="auto")
    fig.savefig(output_folder + "Taggram")

    # Plot Bar chart for the labels
    fig = Figure(figsize=(10, 8))
    tags_likelihood_mean = np.mean(taggram, axis=0)  # averaging the Taggram through time
    tags_likelihood = tags_likelihood_mean / sum(tags_likelihood_mean)
    ax = fig.subplots()
    # y-axis title
    ax.set_ylabel('(likelihood)', fontsize=fontsize)
    # y-axis
    ax.set_ylim((0, 1))
    ax.tick_params(axis="y", labelsize=fontsize)
    # x-axis
    ax.tick_params(axis="x", labelsize=fontsize - 1)
    pos = np.arange(len(tags))
    ax.set_xticks(pos)
    ax.set_xticklabels(tags, rotation=90)
    # depict song-level tags likelihood
    ax.bar(pos, tags_likelihood)
    fig.savefig(output_folder + "Tags_Likelihood")

    # Plot Pie Chart
    fig = Figure(figsize=(10, 8))
    fig.subplots_adjust(top=1, bottom=0, right=1, left=0, hspace=0, wspace=0)
    tags_likelihood_mean = np.mean(taggram, axis=0)  # averaging the Taggram through time
    indices = np.where(tags_likelihood_mean >= 0.1)[0]
    tags_likelihood_mean = tags_likelihood_mean[indices]
    tags = list(np.array(tags)[indices.astype(int)])
    indices = np.argsort(-tags_likelihood_mean)
    tags_likelihood_mean = tags_likelihood_mean[indices]
    tags = list(np.array(tags)[indices.astype(int)])
    tags_likelihood_mean = tags_likelihood_mean / sum(tags_likelihood_mean)
    explode = [0] * len(tags)
    explode[0] = 0.2
    ax1 = fig.subplots()
    ax1.pie(tags_likelihood_mean, explode=explode, labels=tags, autopct='%1.1f%%',
            shadow=True, startangle=90, wedgeprops={})
    ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
    ax1.margins(0.1, 0.1)
    fig.savefig(output_folder + "PieChart", transparent=True)

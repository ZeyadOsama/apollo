import argparse

import numpy as np

from apollo.engine.genre_classification.extractor import extractor


def top_tags(file_name, model='MSD_musicnn', topN=5, input_length=10, input_overlap=False, print_tags=True,
             save_tags=False):
    taggram, tags = extractor(file_name, model=model, input_length=input_length, input_overlap=input_overlap,
                              extract_features=False)
    tags_likelihood_mean = np.mean(taggram, axis=0)

    if print_tags:
        print('[' + file_name + '] Top' + str(topN) + ' tags: ')

    if save_tags:
        to = open(save_tags, 'a')
        to.write(
            file_name + ',' + model + ',input_length=' + str(input_length) + ',input_overlap=' + str(input_overlap))

    topN_tags = []
    for tag_index in tags_likelihood_mean.argsort()[-topN:][::-1]:
        topN_tags.append(tags[tag_index])

        if print_tags:
            print(' - ' + tags[tag_index])

        if save_tags:
            to.write(',' + tags[tag_index])

    if save_tags:
        to.write('\n')
        to.close()

    return topN_tags


def parse_args():
    parser = argparse.ArgumentParser(
        description='Predict the topN tags of the music-clip in file_name with the selected model')

    parser.add_argument('file_name',
                        type=str,
                        help='audio file to process')

    parser.add_argument('-mod', '--model', metavar='',
                        type=str,
                        default='MTT_musicnn',
                        help='select the music audio tagging model to employ (python -m musicnn.tagger music.mp3 --model MTT_musicnn)',
                        required=False)

    parser.add_argument('-n', '--topN', metavar='',
                        type=int,
                        default=3,
                        help='extract N most likely tags according to the selected model (python -m musicnn.tagger music.mp3 --topN 10)',
                        required=False)

    parser.add_argument('-len', '--length', metavar='',
                        type=float,
                        default=3.0,
                        help='length (in seconds) of the input spectrogram patches (python -m musicnn.tagger music.mp3 -len 3.1)',
                        required=False)

    parser.add_argument('-ov', '--overlap', metavar='',
                        type=float,
                        default=False,
                        help='ammount of overlap (in seconds) of the input spectrogram patches (python -m musicnn.tagger music.mp3 -ov 1.0)',
                        required=False)

    parser.add_argument('-p', '--print',
                        default=False,
                        action='store_true',
                        help='employ --print flag for printing the tags (python -m musicnn.tagger music.mp3 --print)',
                        required=False)

    parser.add_argument('-s', '--save', metavar='',
                        type=str,
                        default=False,
                        help='path where to store/save the tags (python -m musicnn.tagger music.mp3 --save out.tags)',
                        required=False)

    args = parser.parse_args()

    return args


if __name__ == '__main__':
    # read parameters from command line
    params = parse_args()

    # predict topN tags
    topN_tags = top_tags(params.file_name,
                         model=params.model,
                         topN=params.topN,
                         input_length=params.length,
                         input_overlap=params.overlap,
                         print_tags=params.print,
                         save_tags=params.save)

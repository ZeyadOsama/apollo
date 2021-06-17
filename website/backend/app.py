# Importing required libraries.
import os

# !/usr/bin/env python
# coding: utf8

"""
app.py:
"""

__author__ = "Omar Marzouk"
__license__ = "MIT License"

import subprocess
import wave

from flask import Flask, render_template, request, redirect, send_file,jsonify
from flask_cors import CORS, cross_origin
from pydub import AudioSegment
from pydub.playback import play
from werkzeug.utils import secure_filename
import os, sys

currDir = os.path.dirname(os.path.realpath(__file__))
webDir = os.path.abspath(os.path.join(currDir, '..'))
rootDir = os.path.abspath(os.path.join(webDir, '..'))
if rootDir not in sys.path: # add parent dir to paths
    sys.path.append(rootDir)

from apollo.engine.models.GernreClassificaiton.tagger import *

app = Flask(__name__)
cors = CORS(app, expose_headers='Authorization')
app.config['CORS_HEADERS'] = 'Content-Type'
RESULTS_DIR = "results/"
RESULT_FILE = "audio.wav"
RESULT_MP3 = "audio.mp3"


@app.route('/', methods=['GET', 'POST'])
def uploaded_file():
    dst = RESULTS_DIR + RESULT_FILE

    if request.method == 'POST':
        f = request.files["myFile"]

        path = "audio_dataset/" + f.filename
        print(f.filename)
        if ".mp3" in f.filename:
            # convert mp3 to wav
            secure = RESULTS_DIR + secure_filename(f.filename)
            f.save(secure)
            os.rename(secure,RESULTS_DIR + RESULT_MP3)
            sound = AudioSegment.from_mp3(RESULT_MP3)
            sound.export(dst, format="wav")
            # play(sound)

        elif "recorded_audio" in f.filename:
            subprocess.call(['ffmpeg', '-i', path, dst])

        else:
            f.save(RESULTS_DIR + secure_filename(f.filename))

    return "done!"


def read_wav_file(filename):
    with wave.open(filename, 'rb') as w:
        rate = w.getframerate()
        frames = w.getnframes()
        dur = frames / float(rate)

    return dur


@app.route('/TwoStems', methods=['GET'])
def downloaded_file_two():
    if request.method == 'GET':
        path_to_file = "results/audio.wav"
        return send_file(path_to_file,
                         mimetype="audio/wav", as_attachment=True,
                         attachment_filename="audio.wav")


@app.route('/FourStems', methods=['GET'])
def downloaded_file_four():
    if request.method == 'GET':
        path_to_file = "results/audio.wav"
        return send_file(path_to_file,
                         mimetype="audio/wav", as_attachment=True,
                         attachment_filename="audio.wav")


@app.route('/FiveStems', methods=['GET'])
def downloaded_file_five():
    if request.method == 'GET':
        path_to_file = "results/audio.wav"
        return send_file(path_to_file,
                         mimetype="audio/wav", as_attachment=True,
                         attachment_filename="audio.wav")


@app.route('/MusicTagging', methods=['GET'])
def downloaded_file_tags():
    if request.method == 'GET':
        print(request.args)
        if "Tags" in request.args:
            return jsonify(top_tags(RESULTS_DIR + RESULT_MP3))
        else:
            path_to_file = "results/audio.wav"
            return send_file(path_to_file,
                             mimetype="audio/wav", as_attachment=True,
                             attachment_filename="audio.wav")


if __name__ == '__main__':
    app.run(debug=True)

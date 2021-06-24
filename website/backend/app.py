# Importing required libraries.

# !/usr/bin/env python
# coding: utf8

"""
app.py:
"""

__author__ = "Omar Marzouk"
__license__ = "MIT License"


import wave
from io import BytesIO
from flask import Flask, render_template, request, redirect, send_file, jsonify, Response
from flask_cors import CORS, cross_origin
from pydub import AudioSegment
from pydub.playback import play
from werkzeug.utils import secure_filename
import os, sys
import subprocess
import shutil

currDir = os.path.dirname(os.path.realpath(__file__))
webDir = os.path.abspath(os.path.join(currDir, '..'))
rootDir = os.path.abspath(os.path.join(webDir, '..'))
if rootDir not in sys.path:  # add parent dir to paths
    sys.path.append(rootDir)

<<<<<<< Updated upstream
from apollo.engine.models.genre_classification.tagger import *
=======
from apollo.engine.models.GenreClassification.tagger import *
>>>>>>> Stashed changes

app = Flask(__name__)
cors = CORS(app, expose_headers='Authorization')
app.config['CORS_HEADERS'] = 'Content-Type'
RESULTS_DIR = "results/"
RESULT_FILE = "audio.wav"
RESULT_MP3 = "audio.mp3"
PLOTS_DIR = "plots/"


@app.route('/', methods=['GET', 'POST'])
def uploaded_file():
    dst = RESULTS_DIR + RESULT_FILE

    if request.method == 'POST':
        f = request.files["myFile"]

        path = "audio_dataset/" + f.filename
        print(f.filename)
        if ".mp3" in f.filename:
            # convert mp3 to wav
            if os.path.exists(dst):
                os.remove(dst)
            secure = RESULTS_DIR + secure_filename(f.filename)
            f.save(secure)
            os.rename(secure, RESULTS_DIR + RESULT_MP3)
            sound = AudioSegment.from_mp3(RESULTS_DIR + RESULT_MP3)
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


@app.route('/GetTwoStems')
def downloaded_file_two():
    if os.path.exists("results/audio/"):
        shutil.rmtree("results/audio/")
    os.system("spleeter separate -i results/audio.wav -p spleeter:2stems -B tensorflow -o results/")
    return "done!"


@app.route('/GetFourStems', methods=['GET'])
def downloaded_file_four():
    if os.path.exists("results/audio/"):
        shutil.rmtree("results/audio/")
    os.system("spleeter separate -i results/audio.wav -p spleeter:4stems -B tensorflow -o results/")
    return "done!"


@app.route('/GetFiveStems', methods=['GET'])
def downloaded_file_five():
    if os.path.exists("results/audio/"):
        shutil.rmtree("results/audio/")
    os.system("spleeter separate -i results/audio.wav -p spleeter:5stems -B tensorflow -o results/")
    return "done!"


@app.route('/MusicTagging', methods=['GET'])
def downloaded_file_tags():
    if request.method == 'GET':
        extractor(RESULTS_DIR + RESULT_MP3, PLOTS_DIR)
        return send_file("plots/PieChart.png", mimetype='image/png')


@app.route("/Original")
def stream_original():
    def generate():
        with open("results/audio.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


if __name__ == '__main__':
    app.run(debug=True)

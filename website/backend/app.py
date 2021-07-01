# Importing required libraries.

# !/usr/bin/env python
# coding: utf8

"""
app.py:
"""

__author__ = "Omar Marzouk"
__license__ = "MIT License"

import os
import shutil
import subprocess
import sys
import wave

from flask import Flask, request, send_file, Response
from flask_cors import CORS
from pydub import AudioSegment
from werkzeug.utils import secure_filename

currDir = os.path.dirname(os.path.realpath(__file__))
webDir = os.path.abspath(os.path.join(currDir, '..'))
rootDir = os.path.abspath(os.path.join(webDir, '..'))
if rootDir not in sys.path:  # add parent dir to paths
    sys.path.append(rootDir)

from apollo.engine.models.genre_classification.tagger import *

app = Flask(__name__)
cors = CORS(app, expose_headers='Authorization')
app.config['CORS_HEADERS'] = 'Content-Type'
RESULTS_DIR = "results/"
RESULT_FILE = "audio.wav"
RESULT_MP3 = "audio.mp3"
PLOTS_DIR = "plots/"


@app.route('/', methods=['GET', 'POST'])
def uploaded_file():
    try:
        os.makedirs(RESULTS_DIR, exist_ok=True)
        print(f'Directory {RESULTS_DIR} created successfully.')
    except OSError:
        print(f'Directory {RESULTS_DIR} can not be created.')

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
            secure = RESULTS_DIR + secure_filename(f.filename)
            f.save(secure)
            AudioSegment.from_wav(secure).export(RESULTS_DIR + RESULT_MP3, format="mp3")

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


@app.route('/GetFourStems')
def downloaded_file_four():
    if os.path.exists("results/audio/"):
        shutil.rmtree("results/audio/")
    os.system("spleeter separate -i results/audio.wav -p spleeter:4stems -B tensorflow -o results/")
    return "done!"


@app.route('/GetFiveStems')
def downloaded_file_five():
    if os.path.exists("results/audio/"):
        shutil.rmtree("results/audio/")
    os.system("spleeter separate -i results/audio.wav -p spleeter:5stems -B tensorflow -o results/")
    return "done!"


@app.route('/MusicTags')
def downloaded_file_tags():
    try:
        os.makedirs(PLOTS_DIR, exist_ok=True)
        print(f'Directory {PLOTS_DIR} created successfully.')
    except OSError:
        print(f'Directory {PLOTS_DIR} can not be created.')

    if request.method == 'GET':
        if os.path.exists("plots/PieChart.png"):
            os.remove("plots/PieChart.png")
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


@app.route("/Vocals")
def stream_vocal():
    def generate():
        while True:
            if os.path.exists("results/audio/vocals.wav"):
                break
        with open("results/audio/vocals.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


@app.route("/Instrumental")
def stream_instruments():
    def generate():
        while True:
            if os.path.exists("results/audio/accompaniment.wav"):
                break
        with open("results/audio/accompaniment.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


@app.route("/Bass")
def stream_bass():
    def generate():
        while True:
            if os.path.exists("results/audio/bass.wav"):
                break
        with open("results/audio/bass.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


@app.route("/Drums")
def stream_drums():
    def generate():
        while True:
            if os.path.exists("results/audio/drums.wav"):
                break
        with open("results/audio/drums.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


@app.route("/Piano")
def stream_piano():
    def generate():
        while True:
            if os.path.exists("results/audio/piano.wav"):
                break
        with open("results/audio/piano.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


@app.route("/Other")
def stream_other():
    def generate():
        while True:
            if os.path.exists("results/audio/other.wav"):
                break
        with open("results/audio/other.wav", "rb") as fwav:
            data = fwav.read(1024)
            while data:
                yield data
                data = fwav.read(1024)

    return Response(generate(), mimetype="audio/x-wav")


if __name__ == '__main__':
    app.run(debug=True)

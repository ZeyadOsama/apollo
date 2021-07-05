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

from flask import Flask, request, send_file
from flask_cors import CORS
from pydub import AudioSegment
from werkzeug.utils import secure_filename

from apollo.engine.models.genre_classification.tagger import *

dir_curr = os.path.dirname(os.path.realpath(__file__))
dir_root = os.path.abspath(os.path.join(dir_curr, '..'))
if dir_root not in sys.path:
    sys.path.append(dir_root)

app = Flask(__name__)
cors = CORS(app, expose_headers='Authorization')
app.config['CORS_HEADERS'] = 'Content-Type'

RESULT_FILE = "audio.wav"
RESULT_MP3 = "audio.mp3"

DIR_RESULTS = 'results/'
DIR_STEM = DIR_RESULTS + 'stem/'
DIR_SEP = DIR_STEM + 'audio/'
DIR_PLOT = DIR_RESULTS + 'plot/'

EXT_WAV = '.wav'
EXT_MP3 = '.mp3'
MIMETYPE = 'audio/wav'


def setup_dirs():
    try:
        os.makedirs(DIR_RESULTS, exist_ok=True)
        print('Directory {} created successfully.'.format(DIR_RESULTS))
    except OSError:
        print('Directory {} could not be created.'.format(DIR_RESULTS))

    try:
        os.makedirs(DIR_STEM, exist_ok=True)
        print('Directory {} created successfully.'.format(DIR_STEM))
    except OSError:
        print('Directory {} could not be created.'.format(DIR_STEM))

    try:
        os.makedirs(DIR_PLOT, exist_ok=True)
        print('Directory {} created successfully.'.format(DIR_PLOT))
    except OSError:
        print('Directory {} could not be created.'.format(DIR_PLOT))


@app.route('/', methods=['GET', 'POST'])
def uploaded_file():
    setup_dirs()

    dst = DIR_RESULTS + RESULT_FILE

    if request.method == 'POST':
        f = request.files["myFile"]
        path = "audio_dataset/" + f.filename
        print(f.filename)
        if ".mp3" in f.filename:
            # convert mp3 to wav
            if os.path.exists(dst):
                os.remove(dst)
            secure = DIR_RESULTS + secure_filename(f.filename)
            f.save(secure)
            os.rename(secure, DIR_RESULTS + RESULT_MP3)
            sound = AudioSegment.from_mp3(DIR_RESULTS + RESULT_MP3)
            sound.export(dst, format="wav")
            # play(sound)
        elif "recorded_audio" in f.filename:
            subprocess.call(['ffmpeg', '-i', path, dst])
        else:
            secure = DIR_RESULTS + secure_filename(f.filename)
            f.save(secure)
            AudioSegment.from_wav(secure).export(DIR_RESULTS + RESULT_MP3, format="mp3")
    return "done!"


def read_wav_file(filename):
    with wave.open(filename, 'rb') as w:
        rate = w.getframerate()
        frames = w.getnframes()
        dur = frames / float(rate)
    return dur


@app.route('/GetTwoStems')
def downloaded_file_two():
    if os.path.exists(DIR_STEM + "audio/"):
        shutil.rmtree(DIR_STEM + "audio/")
    os.system("spleeter separate -i {}audio.wav -p spleeter:2stems -B tensorflow -o {}".format(DIR_RESULTS, DIR_STEM))
    return "done!"


@app.route('/GetFourStems')
def downloaded_file_four():
    if os.path.exists(DIR_STEM + "audio/"):
        shutil.rmtree(DIR_STEM + "audio/")
    os.system("spleeter separate -i {}audio.wav -p spleeter:4stems -B tensorflow -o {}".format(DIR_RESULTS, DIR_STEM))
    return "done!"


@app.route('/GetFiveStems')
def downloaded_file_five():
    if os.path.exists(DIR_STEM + "audio/"):
        shutil.rmtree(DIR_STEM + "audio/")
    os.system("spleeter separate -i {}audio.wav -p spleeter:5stems -B tensorflow -o {}".format(DIR_RESULTS, DIR_STEM))
    return "done!"


@app.route('/MusicTags')
def downloaded_file_tags():
    setup_dirs()
    if request.method == 'GET':
        if os.path.exists(DIR_PLOT + "PieChart.png"):
            os.remove(DIR_PLOT + "PieChart.png")
        extractor(DIR_RESULTS + RESULT_MP3, DIR_PLOT)
        return send_file(DIR_PLOT + "PieChart.png", mimetype='image/png')


def send_audio(name: str, f_dir: str = DIR_SEP):
    name = name + EXT_WAV
    while True:
        if os.path.exists(f_dir + name):
            break
    return send_file(f_dir + name,
                     mimetype=MIMETYPE,
                     as_attachment=True,
                     attachment_filename=name)


@app.route("/Original")
def stream_original():
    return send_audio('audio', f_dir=DIR_RESULTS)


@app.route("/Vocals")
def stream_vocal():
    return send_audio('vocals')


@app.route("/Instrumental")
def stream_instruments():
    return send_audio('accompaniment')


@app.route("/Bass")
def stream_bass():
    return send_audio('bass')


@app.route("/Drums")
def stream_drums():
    return send_audio('drums')


@app.route("/Piano")
def stream_piano():
    return send_audio('piano')


@app.route("/Other")
def stream_other():
    return send_audio('other')


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


if __name__ == '__main__':
    app.run(debug=True)

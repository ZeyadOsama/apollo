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
EXT_IMG = '.png'
MIMETYPE_AUDIO = 'audio/wav'


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
            # Convert .mp3 to .wav
            if os.path.exists(dst):
                os.remove(dst)
            secure = DIR_RESULTS + secure_filename(f.filename)
            f.save(secure)
            os.rename(secure, DIR_RESULTS + RESULT_MP3)
            sound = AudioSegment.from_mp3(DIR_RESULTS + RESULT_MP3)
            sound.export(dst, format="wav")
        elif "recorded_audio" in f.filename:
            subprocess.call(['ffmpeg', '-i', path, dst])
        else:
            secure = DIR_RESULTS + secure_filename(f.filename)
            f.save(secure)
            AudioSegment.from_wav(secure).export(DIR_RESULTS + RESULT_MP3, format="mp3")
    return "done!"


def separate(num: int):
    if os.path.exists(DIR_STEM + "audio/"):
        shutil.rmtree(DIR_STEM + "audio/")
    os.system(
        "spleeter separate -i {}audio.wav -p spleeter:{}stems -B tensorflow -o {}".format(DIR_RESULTS, num, DIR_STEM))
    return "done!"


def send_audio(name: str, f_dir: str = DIR_SEP):
    name = name + EXT_WAV
    while True:
        if os.path.exists(f_dir + name):
            break
    return send_file(f_dir + name,
                     mimetype=MIMETYPE_AUDIO,
                     as_attachment=True,
                     attachment_filename=name)


@app.route('/GetTwoStems')
def separate_two():
    return separate(2)


@app.route('/GetFourStems')
def separate_four():
    return separate(4)


@app.route('/GetFiveStems')
def separate_five():
    return separate(5)


@app.route("/Original")
def send_original():
    return send_audio('audio', f_dir=DIR_RESULTS)


@app.route("/Vocals")
def send_vocal():
    return send_audio('vocals')


@app.route("/Instrumental")
def send_instruments():
    return send_audio('accompaniment')


@app.route("/Bass")
def send_bass():
    return send_audio('bass')


@app.route("/Drums")
def send_drums():
    return send_audio('drums')


@app.route("/Piano")
def send_piano():
    return send_audio('piano')


@app.route("/Other")
def send_other():
    return send_audio('other')


@app.route('/MusicTags')
def music_tag():
    setup_dirs()
    if request.method == 'GET':
        name = 'PieChart' + EXT_IMG
        if os.path.exists(DIR_PLOT + name):
            os.remove(DIR_PLOT + name)
        extractor(DIR_RESULTS + RESULT_MP3, DIR_PLOT)
        return send_file(DIR_PLOT + name, mimetype='image/png')


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
    app.run(debug=True, threaded=True)

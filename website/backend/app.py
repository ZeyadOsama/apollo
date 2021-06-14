# Importing required libraries.
import os

#!/usr/bin/env python
# coding: utf8

"""
app.py:
"""

__author__ = "Omar Marzouk"
__license__ = "MIT License"

import subprocess
import wave

from flask import Flask, render_template, request, redirect, send_file
from flask_cors import CORS, cross_origin
from pydub import AudioSegment
from pydub.playback import play
from werkzeug.utils import secure_filename

app = Flask(__name__)
cors = CORS(app, expose_headers='Authorization')
app.config['CORS_HEADERS'] = 'Content-Type'
RESULTS_DIR = "results/"
RESULT_FILE = "audio.wav"


@app.route('/', methods=['GET', 'POST'])
def uploaded_file():
    dst = RESULTS_DIR + RESULT_FILE

    if request.method == 'POST':
        f = request.files["myFile"]

        path = "audio_dataset/" + f.filename
        print(f.filename)
        if ".mp3" in f.filename:
            # convert mp3 to wav
            secure = secure_filename(f.filename)
            f.save(secure)
            sound = AudioSegment.from_mp3(secure)
            sound.export(dst, format="wav")
            play(sound)
            os.remove(secure)

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
def downloaded_file():
    if request.method == 'GET':
        path_to_file = "results/audio.wav"
        return send_file(path_to_file,
        mimetype="audio/wav", as_attachment=True,
        attachment_filename="audio.wav")



if __name__ == '__main__':
    app.run(debug=True)

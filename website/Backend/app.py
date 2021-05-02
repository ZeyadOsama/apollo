# Importing required libraries.

from flask import Flask, render_template, request, Response, redirect, url_for
from werkzeug.utils import secure_filename
from pydub import AudioSegment
from pydub.playback import play
import subprocess
import wave

app = Flask(__name__)


@app.route('/')
def upload_file():
    return render_template('upload.html')


@app.route('/', methods=['GET', 'POST'])
def uploaded_file():
    dst = "results/audio.wav"

    if request.method == 'POST':
        if 'file' not in request.files:
            return redirect(request.url)

        f = request.files['file']
        print(type(f), f)
        if f.filename == "":
            return redirect(request.url)

        print(f.filename, ".mp3" in f.filename)
        path = "audio_dataset/" + f.filename
        if ".mp3" in f.filename:
            # convert mp3 to wav
            sound = AudioSegment.from_mp3(path)
            sound.export(dst, format="wav")
            play(sound)

        elif "recorded_audio" in f.filename:
            subprocess.call(['ffmpeg', '-i', path, dst])

        else:
            f.save(secure_filename(f.filename))

    return render_template('upload.html')


def read_wav_file(filename):
    with wave.open(filename, 'rb') as w:
        rate = w.getframerate()
        frames = w.getnframes()
        dur = frames / float(rate)

    return dur


if __name__ == '__main__':
    app.run(debug=True)

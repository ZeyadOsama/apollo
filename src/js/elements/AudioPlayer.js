import React, {Component} from 'react';

import '../../css/styles.css';
import '../../css/audio.css';
import '../../css/animation.css'

export class AudioPlayer extends Component {

    constructor(props) {
        super(props);
        this.audioPlayerRef = React.createRef();
        this.name = props.name;
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    componentDidMount() {
        const audioPlayer = this.audioPlayerRef;
        const audio = new Audio(this.url + this.name);

        /**
         * @function Audio event listener.
         */
        audio.addEventListener(
            "loadeddata",
            () => {
                if (audioPlayer.current) {
                    audioPlayer.current.querySelector(".time .length").textContent = getTimeCodeFromNum(audio.duration);
                    audio.volume = .75;
                }
            },
            false
        );

        /**
         * @function Click on timeline to skip around.
         * @type {Element}
         */
        const timeline = audioPlayer.current.querySelector(".timeline");
        timeline.addEventListener("click", e => {
            const rect = e.currentTarget.getBoundingClientRect(), offsetX = e.clientX - rect.left;
            const timelineWidth = window.getComputedStyle(timeline).width;
            audio.currentTime = parseInt((offsetX / parseInt(timelineWidth) * audio.duration).toString());
        }, false);


        /**
         * @function Click volume slider to change volume.
         * @type {Element}
         */
        const volumeSlider = audioPlayer.current.querySelector(".controls .volume-slider");
        volumeSlider.addEventListener('click', e => {
            const sliderWidth = window.getComputedStyle(volumeSlider).width;
            const newVolume = e.offsetX / parseInt(sliderWidth);
            audio.volume = newVolume;
            audioPlayer.current.querySelector(".controls .volume-percentage").style.width = newVolume * 100 + '%';
        }, false)

        /**
         * @function Check audio percentage and update time accordingly.
         */
        setInterval(() => {
            if (audioPlayer.current) {
                const progressBar = audioPlayer.current.querySelector(".progress");
                progressBar.style.width = audio.currentTime / audio.duration * 100 + "%";
                audioPlayer.current.querySelector(".time .current").textContent = getTimeCodeFromNum(audio.currentTime);
            }
        }, 500);


        /**
         * @function Toggle between playing and pausing on button click.
         * @type {Element}
         */
        const playBtn = audioPlayer.current.querySelector(".controls .toggle-play");
        playBtn.addEventListener(
            "click",
            () => {
                if (audio.paused) {
                    playBtn.classList.remove("play");
                    playBtn.classList.add("pause");
                    audio.play();
                } else {
                    playBtn.classList.remove("pause");
                    playBtn.classList.add("play");
                    audio.pause();
                }
            },
            false
        );

        audioPlayer.current.querySelector(".volume-button").addEventListener("click", () => {
            const volumeEl = audioPlayer.current.querySelector(".volume-container .volume");
            audio.muted = !audio.muted;
            if (audio.muted) {
                volumeEl.classList.remove("icono-volumeMedium");
                volumeEl.classList.add("icono-volumeMute");
            } else {
                volumeEl.classList.add("icono-volumeMedium");
                volumeEl.classList.remove("icono-volumeMute");
            }
        });

        /**
         * @function Turns 128 seconds into 2:08
         * @param num
         * @returns {string}
         */
        function getTimeCodeFromNum(num) {
            let seconds = parseInt(num);
            let minutes = parseInt(seconds / 60);
            seconds -= minutes * 60;
            const hours = parseInt(minutes / 60);
            minutes -= hours * 60;

            if (hours === 0) return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
            return `${String(hours).padStart(2, 0)}:${minutes}:${String(seconds % 60
            ).padStart(2, 0)}`;
        }
    }

    render() {
        return (
            <div ref={this.audioPlayerRef} className="audio-player center">
                <div className="timeline">
                    <div className="progress"/>
                </div>
                <div className="controls">
                    <div className="play-container">
                        <div className="toggle-play play"/>
                    </div>
                    <div className="time">
                        <div className="current">0:00</div>
                        <div className="divider">/</div>
                        <div className="length"/>
                    </div>
                    <div className="name">{this.name}</div>
                    <div className="volume-container">
                        <div className="volume-button">
                            <div className="volume icono-volumeMedium"/>
                        </div>

                        <div className="volume-slider">
                            <div className="volume-percentage"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

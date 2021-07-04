import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

import '../../css/styles.css';
import '../../css/animation.css'

export class AudioPlayer extends Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }
    render() {
        return (
                    <div className="audio-player">
                        <div className="timeline">
                            <div className="progress"></div>
                        </div>
                        <div className="controls">
                            <div className="play-container">
                                <div className="toggle-play play">
                                </div>
                            </div>
                            <div className="time">
                                <div className="current">0:00</div>
                                <div className="divider">/</div>
                                <div className="length"></div>
                            </div>
                            <div className="name">{this.name}</div>
                            <div className="volume-container">
                                <div className="volume-button">
                                    <div className="volume icono-volumeMedium"></div>
                                </div>

                                <div className="volume-slider">
                                    <div className="volume-percentage"></div>
                                </div>
                            </div>
                        </div>
                    </div>
        );
    }
}
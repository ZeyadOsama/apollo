﻿import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../../css/styles.css';

const url = process.env.APP_URL || 'http://localhost:5000/';

export class FiveStems extends Component {
    static displayName = FiveStems.name;

    render() {
        return (
            <Container>
                <div class="animation sequence fadeInBottom-narrow">

                    <h1 class="title">
                        Five Stems Below
                    </h1>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="">Original Audio File</h5>
                            </div>
                            <div class="col-9">
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
                            <div className="name">Original</div>
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
                            </div>
                        </div>

                        <hr/>
                        <br/>

                        <Jumbotron>


                            <div class="row">
                                <div class="col">
                                    <h5 class="">Vocal</h5>
                                </div>
                                <div class="col-9">
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
                            <div className="name">Vocals</div>
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

                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Bass</h5>
                                </div>
                                <div class="col-9">
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
                            <div className="name">Bass</div>
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
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Drums</h5>
                                </div>
                                <div class="col-9">
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
                            <div className="name">Drums</div>
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

                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Piano</h5>
                                </div>
                                <div class="col-9">
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
                            <div className="name">Piano</div>
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
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Instrumentals</h5>
                                </div>
                                <div class="col-9">
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
                            <div className="name">Other</div>
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
                                </div>
                            </div>

                        </Jumbotron>

                    </div>

                </div>
            </Container>
        );
    }
}

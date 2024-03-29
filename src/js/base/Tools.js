﻿import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import '../../css/styles.css';

export class Tools extends Component {
    static displayName = Tools.name;

    render() {
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">

                    <h1 className="title">
                        Tools Page
                    </h1>

                    <div className="text-center">
                        <a id="clickable" className="btn btn-outline-secondary btn-lg" href="/StemSeparation">
                            <h5>Stem Separation</h5>
                            <h6>Separating Channels Into<br/>Two, Four or Five stems.</h6>
                        </a>
                        <a id="clickable" className="btn btn-outline-secondary btn-lg" href="/MusicTagging">
                            <h5>Music Tagging</h5>
                            <h6>Get Your Audio Tags</h6>
                        </a>
                    </div>

                </div>
            </Container>
        );
    }
}

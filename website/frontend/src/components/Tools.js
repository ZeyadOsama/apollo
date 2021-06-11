import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import './Home.css';

export class Tools extends Component {
    static displayName = Tools.name;

    render() {
        return (
            <div className="">
                <Container>
                    <h1>Tools Page!</h1>

                    <br />

                    <audio controls class="audio-element1">
                        <source src="/test.mp3" type="audio/mp3"></source>

                    </audio>
                    <br />

                    <hr />
                    <br />
                    <br />
                    <div class="text-center">
                        <div class="meh">
                                <a id="example1" class="btn btn-outline-secondary btn-lg" href="/StemSeparation">Stem Separation
                                <h5>Separating channels into 2,4 or <br></br> 5 stems.</h5></a>
                                <a id="example1" class="btn btn-outline-secondary btn-lg" href="/MusicTagging" >Music Tagging
                                <h5>Get your audio tags</h5></a>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

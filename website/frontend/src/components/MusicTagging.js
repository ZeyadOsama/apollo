import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Home.css';


export class MusicTagging extends Component {
    static displayName = MusicTagging.name;





    render() {
        return (
            <div className="">
            <Container>
                <h1>Music Tagging!</h1>

                <audio controls class="audio-element1">
                    // <source src="/test.mp3" type="audio/mp3"></source>

                </audio>
                <hr />
                <br />

            </Container>
            </div>
        );
    }
}

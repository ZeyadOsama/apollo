import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {AudioPlayer} from "../elements/AudioPlayer";
import '../../css/styles.css';

export class TwoStems extends Component {

    render() {
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">

                    <h1 className="title">
                        Two Stems
                    </h1>

                    <br/><br/>

                    <AudioPlayer name='Original'/>

                    <br/>

                    <div className="container">

                        <Jumbotron>

                            <div>
                                <h5>Vocals</h5>
                                <AudioPlayer name='Vocals'/>
                            </div>

                            <br/>

                            <div>
                                <h5>Instrumental</h5>
                                <AudioPlayer name='Instrumental'/>
                            </div>

                        </Jumbotron>

                    </div>

                    <br/><br/>

                </div>
            </Container>
        );
    }
}

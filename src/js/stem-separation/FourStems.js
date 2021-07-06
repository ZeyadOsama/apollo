import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {AudioPlayer} from "../elements/AudioPlayer";
import '../../css/styles.css';

export class FourStems extends Component {

    render() {
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">

                    <h1 className="title">
                        Four Stems
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
                                <h5>Bass</h5>
                                <AudioPlayer name='Bass'/>
                            </div>

                            <br/>

                            <div>
                                <h5>Drums</h5>
                                <AudioPlayer name='Drums'/>
                            </div>

                            <br/>

                            <div>
                                <h5>Other</h5>
                                <AudioPlayer name='Other'/>
                            </div>

                        </Jumbotron>

                    </div>

                    <br/><br/>

                </div>
            </Container>
        );
    }
}

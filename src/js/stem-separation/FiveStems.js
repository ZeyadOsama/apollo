import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../../css/styles.css';
import {AudioPlayer} from "../elements/AudioPlayer";

const url = process.env.APP_URL || 'http://localhost:5000/';

export class FiveStems extends Component {
    static displayName = FiveStems.name;

    render() {
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">

                    <h1 className="title">
                        Five Stems Below
                    </h1>

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h5 className="">Original Audio File</h5>
                            </div>
                            <div className="col-9">
                            <AudioPlayer name='Original'/>
                            </div>
                        </div>

                        <hr/>
                        <br/>

                        <Jumbotron>


                            <div className="row">
                                <div className="col">
                                    <h5 className="">Vocal</h5>
                                </div>
                                <div className="col-9">
                        <AudioPlayer name='Vocals'/>

                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div className="row">
                                <div className="col">
                                    <h5 className="">Bass</h5>
                                </div>
                                <div className="col-9">
                        <AudioPlayer name='Bass'/>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div className="row">
                                <div className="col">
                                    <h5 className="">Drums</h5>
                                </div>
                                <div className="col-9">
                        <AudioPlayer name='Drums'/>

                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div className="row">
                                <div className="col">
                                    <h5 className="">Piano</h5>
                                </div>
                                <div className="col-9">
                        <AudioPlayer name='Piano'/>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div className="row">
                                <div className="col">
                                    <h5 className="">Instrumentals</h5>
                                </div>
                                <div className="col-9">
                        <AudioPlayer name='Instrumental'/>
                                </div>
                            </div>

                        </Jumbotron>

                    </div>

                </div>
            </Container>
        );
    }
}

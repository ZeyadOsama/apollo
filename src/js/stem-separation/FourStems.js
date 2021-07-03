import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import '../../css/styles.css';

const url = process.env.APP_URL || 'http://localhost:5000/';

export class FourStems extends Component {
    static displayName = FourStems.name;


    render() {
        return (
            <Container>
                <div class="animation sequence fadeInBottom-narrow">

                    <h1 class="title">
                        Four Stems Below
                    </h1>

                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 class="">Original Audio File</h5>
                            </div>
                            <div class="col-9">
                                <audio src={url + "Original"} controls class="position-relative">

                                </audio>
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
                                    <audio src={url + "Vocals"} controls class="position-relative">

                                    </audio>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Bass</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Bass"} controls class="position-relative">

                                    </audio>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Drums</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Drums"} controls class="position-relative">

                                    </audio>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 class="">Instrumentals</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Other"} controls class="position-relative">

                                    </audio>
                                </div>
                            </div>

                        </Jumbotron>


                    </div>

                </div>
            </Container>
        );
    }
}

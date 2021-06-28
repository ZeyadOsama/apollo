﻿import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

import './Home.css';

const server_host = process.env.YOUR_HOST || '0.0.0.0';
const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
const url = server_host + server_port;

export class TwoStems extends Component {
    static displayName = TwoStems.name;
    state = {
        original: null,
        vocal: null,
        instrumental: null,
    }

    render() {
        return (
            <div className="">
                <Container>
                    <h1>Two Stems Below</h1>
                    <hr/>
                    <br/>


                    <div class="container">
                        <div class="row">
                            <div class="col">
                                <h5 className="">Original Audio File</h5>
                            </div>
                            <div class="col-9">
                                <audio src={url + "Original"} controls className="position-relative">

                                </audio>

                            </div>
                        </div>

                        <hr/>
                        <br/>

                        <Jumbotron>


                            <div class="row">
                                <div class="col">
                                    <h5 className="">Vocal</h5>
                                </div>
                                <div class="col-9">

                                    <audio src={url + "Vocals"} controls className="position-relative">

                                    </audio>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 className="">Instrumental</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Instrumental"} controls
                                           className="position-relative">

                                    </audio>
                                </div>
                            </div>

                        </Jumbotron>


                    </div>


                </Container>

            </div>


        );
    }
}

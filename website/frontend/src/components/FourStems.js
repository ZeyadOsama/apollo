import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Home.css';

const url = process.env.APP_URL || 'http://localhost:5000/' ;
export class FourStems extends Component {
    static displayName = FourStems.name;


    render() {
        return (
            <div className="">
                <Container>
                    <h1>Four Stems Below</h1>
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
                                    <h5 className="">Bass</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Bass"} controls className="position-relative">

                                    </audio>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 className="">Drums</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Drums"} controls className="position-relative">

                                    </audio>
                                </div>
                            </div>

                            <br/>
                            <br/>

                            <div class="row">
                                <div class="col">
                                    <h5 className="">Instrumentals</h5>
                                </div>
                                <div class="col-9">
                                    <audio src={url + "Other"} controls className="position-relative">

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

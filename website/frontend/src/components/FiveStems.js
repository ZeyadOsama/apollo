import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import './Home.css';


export class FiveStems extends Component {
    static displayName = FiveStems.name;





    render() {
        return (
            <div className="">
            <Container>
                <h1>Five Stems Below</h1>
                <hr />
                <br />



                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h5 className="">Original Audio File</h5>
                        </div>
                        <div class="col-9">
                            <audio controls className="position-relative" >
                                <source src="/test.mp3" type="audio/mp3"></source>

                            </audio>
                        </div>
                    </div>

                    <hr />
                    <br />

                    <Jumbotron>


                        <div class="row">
                            <div class="col">
                                <h5 className="">Vocal</h5>
                            </div>
                            <div class="col-9">
                                <audio controls className="position-relative" >
                                    <source src="/test.mp3" type="audio/mp3"></source>

                                </audio>
                             
                            </div>
                        </div>

                        <br />
                        <br />

                        <div class="row">
                            <div class="col">
                                <h5 className="">Bass</h5>
                            </div>
                            <div class="col-9">
                                <audio controls className="position-relative" >
                                    <source src="/test.mp3" type="audio/mp3"></source>

                                </audio>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div class="row">
                            <div class="col">
                                <h5 className="">Drums</h5>
                            </div>
                            <div class="col-9">
                                <audio controls className="position-relative" >
                                    <source src="/test.mp3" type="audio/mp3"></source>

                                </audio>
                                
                            </div>
                        </div>

                        <br />
                        <br />

                        <div class="row">
                            <div class="col">
                                <h5 className="">Piano</h5>
                            </div>
                            <div class="col-9">
                                <audio controls className="position-relative" >
                                    <source src="/test.mp3" type="audio/mp3"></source>

                                </audio>
                            </div>
                        </div>

                        <br />
                        <br />

                        <div class="row">
                            <div class="col">
                                <h5 className="">Instrumentals</h5>
                            </div>
                            <div class="col-9">
                                <audio controls className="position-relative" >
                                    <source src="/test.mp3" type="audio/mp3"></source>

                                </audio>
                            </div>
                        </div>

                    </Jumbotron >


                </div>



            </Container>
            </div>





        );
    }
}

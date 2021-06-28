import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './Home.css';
import history from './history';
import axios from 'axios';

const url = process.env.APP_URL || 'http://localhost:5000/' ;
export class StemSeparation extends Component {
    static displayName = StemSeparation.name;

    TwoStems = () => {
        axios.get(url + "GetTwoStems", null).then(resp => {
            console.log(resp);
        })
        history.push("/TwoStems")
    }

    FourStems = () => {
        axios.get(url + "GetFourStems", null).then(resp => {
            console.log(resp);
        })
        history.push("/FourStems")
    }

    FiveStems = () => {
        axios.get(url + "GetFiveStems", null).then(resp => {
            console.log(resp);
        })
        history.push("/FiveStems")
    }

    render() {
        return (
            <div className="">
                <Container>

                    <h1>Stem Separation!</h1>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="">

                        <div class="text-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="meh">

                                                <div class="col-md-4">
                                                    <button id="example1" class="btn btn-outline-secondary btn-lg"
                                                            onClick={this.TwoStems}>
                                                        2 Stems Separation
                                                        <h5>Vocal & Instrumentals</h5></button>
                                                </div>

                                                <div class="col-md-4">
                                                    <button id="example1" className="btn btn-outline-secondary btn-lg"
                                                            onClick={this.FourStems}>4
                                                        Stems Separation
                                                        <h5>Vocal, Bass, Drums<br></br> & Instrumentals</h5></button>
                                                </div>

                                                <div class="col-md-4">
                                                    <button id="example1" className="btn btn-outline-secondary btn-lg"
                                                            onClick={this.FiveStems}>5
                                                        Stems Separation
                                                        <h5>Vocal, Bass, Drums, Piano<br></br> & Instrumentals</h5>
                                                    </button>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

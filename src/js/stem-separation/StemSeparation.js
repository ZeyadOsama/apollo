import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import '../../css/styles.css';
import history from '../base/History';
import axios from 'axios';

const url = process.env.APP_URL || 'http://localhost:5000/';

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
            <Container>
                <div className="animation sequence fadeInBottom-narrow">

                    <h1 className="title">
                        Stem Separation
                    </h1>

                    <div className="text-center">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="row">
                                        <div className="meh">

                                            <div className="col-md-4">
                                                <button id="clickable" className="btn btn-outline-secondary btn-lg"
                                                        onClick={this.TwoStems}>
                                                    <h5>Two Stems Separation</h5>
                                                    <h6>Vocal & Instrumentals</h6>
                                                </button>
                                            </div>

                                            <div className="col-md-4">
                                                <button id="clickable" className="btn btn-outline-secondary btn-lg"
                                                        onClick={this.FourStems}>
                                                    <h5>Four Stems Separation</h5>
                                                    <h6>Vocal, Bass, Drums & Instrumentals</h6>
                                                </button>
                                            </div>

                                            <div className="col-md-4">
                                                <button id="clickable" className="btn btn-outline-secondary btn-lg"
                                                        onClick={this.FiveStems}>
                                                    <h5>Five Stems Separation</h5>
                                                    <h6>Vocal, Bass, Drums, Piano & Instrumentals</h6>
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
        );
    }
}

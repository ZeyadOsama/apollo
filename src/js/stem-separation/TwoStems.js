﻿import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from "axios";
import {AudioPlayer} from "../elements/AudioPlayer";
import {LoadingZone} from "../elements/LoadingZone";
import '../../css/styles.css';

export class TwoStems extends Component {

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    componentDidMount() {
        this.setState({loading: true}, () => {
            axios
                .get(this.url + "GetTwoStems", null)
                .then(resp => {
                    console.log(resp);
                    this.setState({
                        loading: false,
                    });
                })
        });
    }

    render() {
        const {loading} = this.state;
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

                        {loading ?
                        <Jumbotron>
                                <div className='margin-med'>
                                    <LoadingZone/>
                                </div>
                                                    </Jumbotron>
                            :
                        <Jumbotron>
                            <div>
                                <div>
                                    <h5>Vocals</h5>
                                    <AudioPlayer name='Vocals'/>
                                </div>

                                <br/>

                                <div>
                                    <h5>Instrumental</h5>
                                    <AudioPlayer name='Instrumental'/>
                                </div>
                            </div>
                            </Jumbotron>
                            }
                                                </div>

                    <br/><br/>

                </div>
            </Container>
        );
    }
}

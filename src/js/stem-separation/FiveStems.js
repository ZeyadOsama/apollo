﻿import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {AudioPlayer} from "../elements/AudioPlayer";
import '../../css/styles.css';
import {LoadingZone} from "../elements/LoadingZone";
import axios from "axios";

export class FiveStems extends Component {

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    componentDidMount() {
        this.setState({loading: true}, () => {
            axios
                .get(this.url + "GetFiveStems", null)
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
                        Five Stems
                    </h1>

                    <br/><br/>

                    <AudioPlayer name='Original'/>

                    <br/>

                    <div className="container">

                        <Jumbotron>
                            {loading ?
                                <div className='margin-med'>
                                    <LoadingZone/>
                                </div>
                                :
                                null
                            }

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
                                <h5>Piano</h5>
                                <AudioPlayer name='Piano'/>
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

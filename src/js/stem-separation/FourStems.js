import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import axios from "axios";
import {AudioPlayer} from "../elements/AudioPlayer";
import {LoadingZone} from "../elements/LoadingZone";
import {DownloadButton} from "../elements/DownloadButton";
import '../../css/styles.css';

export class FourStems extends Component {

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    componentDidMount() {
        this.setState({loading: true}, () => {
            axios
                .get(this.url + "GetFourStems", null)
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
                        Four Stems
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
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Vocals</h5>
                                            </div>
                                            <div className="col">
                                                <div className='float-right'>
                                                    <DownloadButton file='Vocals'/>
                                                </div>
                                            </div>
                                        </div>
                                        <AudioPlayer name='Vocals'/>
                                    </div>

                                    <br/>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Bass</h5>
                                            </div>
                                            <div className="col">
                                                <div className='float-right'>
                                                    <DownloadButton file='Bass'/>
                                                </div>
                                            </div>
                                        </div>
                                        <AudioPlayer name='Bass'/>
                                    </div>

                                    <br/>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Drums</h5>
                                            </div>
                                            <div className="col">
                                                <div className='float-right'>
                                                    <DownloadButton file='Drums'/>
                                                </div>
                                            </div>
                                        </div>
                                        <AudioPlayer name='Drums'/>
                                    </div>

                                    <br/>

                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <h5>Other</h5>
                                            </div>
                                            <div className="col">
                                                <div className='float-right'>
                                                    <DownloadButton file='Other'/>
                                                </div>
                                            </div>
                                        </div>
                                        <AudioPlayer name='Other'/>
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

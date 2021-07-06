import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import {AudioPlayer} from "../elements/AudioPlayer";
import '../../css/styles.css';
import axios from "axios";
import {LoadingZone} from "../elements/LoadingZone";

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

                        <Jumbotron>
                            {loading ?
                                <div className='margin-med'>
                                    <LoadingZone/>
                                </div>
                                :
                                null
                            }

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

                    </div>

                    <br/><br/>

                </div>
            </Container>
        );
    }
}

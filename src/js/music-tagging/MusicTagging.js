import React, {Component} from 'react';
import {Container} from 'reactstrap';
import '../../css/styles.css';
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {AudioPlayer} from "../elements/AudioPlayer";
import {LoadingZone} from "../elements/LoadingZone";


export class MusicTagging extends Component {
    static displayName = MusicTagging.name;

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    componentDidMount() {
        this.setState({loading: true}, () => {
            axios
                .get(this.url + 'MusicTags', {
                    responseType: 'arraybuffer'
                })
                .then(resp => {
                    const base64 = btoa(
                        new Uint8Array(resp.data).reduce(
                            (data, byte) => data + String.fromCharCode(byte),
                            '',
                        ),
                    );
                    this.setState({
                        loading: false,
                        data: "data:;base64," + base64
                    });
                });
        });
    }

    render() {
        const {data, loading} = this.state;
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">
                    <h1 className="title">
                        Music Tagging
                    </h1>

                    <br/><br/>

                    <AudioPlayer name='Original'/>

                    <br/>

                    <div>
                        <Jumbotron>
                            {loading ?
                                <div className='margin-med'>
                                    <LoadingZone/>
                                </div>
                                :
                                <img className="center"
                                     src={data}
                                     alt="result"/>
                            }
                        </Jumbotron>
                    </div>

                    <br/><br/>

                </div>
            </Container>
        );
    }
}

import React, {Component} from 'react';
import {Container} from 'reactstrap';
import '../../css/styles.css';
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron'
import {AudioPlayer} from "../elements/AudioPlayer";


export class MusicTagging extends Component {
    static displayName = MusicTagging.name;

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = process.env.APP_URL || 'http://localhost:5000/';
    }

    componentDidMount() {
        axios.get(this.url + 'MusicTags', {responseType: 'arraybuffer'}).then(resp => {
            const base64 = btoa(
                new Uint8Array(resp.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',
                ),
            );
            this.setState({source: "data:;base64," + base64});
        });
    }

    render() {
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">
                    <h1 className="title">
                        Music Tagging
                    </h1>

                    <br/><br/>

                    {/*<div class="audio-container">*/}
                    {/*    <audio controls>*/}
                    {/*        <source src={this.url + "Original"} type="audio/mpeg"/>*/}
                    {/*    </audio>*/}
                    {/*</div>*/}
                    <AudioPlayer name='Original'/>

                    <div>
                        <Jumbotron>
                            <img className="center"
                                 src={this.state.source}
                                 alt="result"/>
                        </Jumbotron>
                    </div>

                </div>
            </Container>
        );
    }
}

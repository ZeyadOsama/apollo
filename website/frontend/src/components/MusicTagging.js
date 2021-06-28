import React, {Component} from 'react';
import {Container} from 'reactstrap';
import './Home.css';
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron'

const server_host = process.env.YOUR_HOST || '0.0.0.0';
const server_port = process.env.YOUR_PORT || process.env.PORT || 5000;

export class MusicTagging extends Component {
    static displayName = MusicTagging.name;

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = server_host + server_port;
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
            <div className="">
                <Container>
                    <h1>Music Tagging!</h1>
                    <audio src={this.url + "Original"} controls className="audio-element1">
                    </audio>
                    <hr/>
                    <br/>
                    <Jumbotron> <img src={this.state.source}/> </Jumbotron>

                </Container>
            </div>
        );
    }
}

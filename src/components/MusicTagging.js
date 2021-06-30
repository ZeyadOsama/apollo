import React, {Component} from 'react';
import {Container} from 'reactstrap';
import './Home.css';
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron'


export class MusicTagging extends Component {
    static displayName = MusicTagging.name;

    constructor(props) {
        super(props);
        this.state = {source: null};
        this.url = process.env.APP_URL || 'http://localhost:5000/' ;
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

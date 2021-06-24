import React, {Component} from 'react';
import {Container} from 'reactstrap';
import './Home.css';
import axios from "axios";
import Jumbotron from 'react-bootstrap/Jumbotron'


export class MusicTagging extends Component {
    static displayName = MusicTagging.name;

    constructor(props) {
        super();
        this.state = {source: null};
        axios.get('http://localhost:5000/MusicTagging',{responseType: 'arraybuffer'}).then(resp => {
            const base64 = btoa(
          new Uint8Array(resp.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            '',
          ),
        );
        this.setState({ source: "data:;base64," + base64 });
        });
    }


    render() {
        return (
            <div className="">
                <Container>
                    <h1>Music Tagging!</h1>

                    <audio src="http://localhost:5000/Original" controls className="audio-element1">

                    </audio>
                    <hr/>
                    <br/>
                    <Jumbotron> <img src={this.state.source} /> </Jumbotron>

                </Container>
            </div>
        );
    }
}

import React, {Component} from 'react';
import {Container} from 'reactstrap';
import './Home.css';
import axios from "axios";


export class MusicTagging extends Component {
    static displayName = MusicTagging.name;

    constructor(props) {
        super();
        this.state = {Tags: ""};
        axios.get('http://localhost:5000/MusicTagging', {params: {"Tags": 1}}).then(resp => {
            this.setState({Tags: resp.data});
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
                    <p> {this.state.Tags} </p>

                </Container>
            </div>
        );
    }
}

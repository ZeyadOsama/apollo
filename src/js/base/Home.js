import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import history from './History';
import axios from 'axios';

import '../../css/styles.css';
import '../../css/animation.css'

export class Home extends Component {
    state = {
        selectedFile: null,
        source: ""
    }

    onFileChange = event => {
        this.setState({selectedFile: event.target.files[0], source: event.target.files[0].name});
    };

    onFileUpload = () => {
        const formData = new FormData();
        formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);
        console.log(this.state.selectedFile.name);
        const url = process.env.APP_URL || 'http://localhost:5000/';
        axios.post(url, formData);
        history.push("/Tools");
    }

    render() {
        return (
            <Container>
                <h1 class="animation sequence fadeInBottom-narrow">
                    Attach Your Audio File Below
                </h1>

                <br/>

                <div class="row animation sequence fadeInBottom-narrow">
                    <form class="md-form">

                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <div className="file-field">
                                        <div className="btn btn-outline-light">
                                            <input name='file' type="file" onChange={this.onFileChange}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-outline-light text-uppercase"
                                            onClick={this.onFileUpload}>
                                        Upload
                                    </button>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </Container>
        );

    }
}

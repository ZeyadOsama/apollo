import React, {Component} from 'react';
import './Home.css';
import {Container} from 'react-bootstrap';
import history from './history';
import axios from 'axios';


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
                <h1>Please Attach Your Audio File</h1>

                <br/>

                <div class="row">
                    <form class="md-form">

                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <div className="file-field">
                                        <div className="btn btn-outline-light">
                                            <input name='file' type="file" onChange={this.onFileChange}/>
                                        </div>
                                        <div className="file-path-wrapper"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <br/>

                        <div className="container">
                            <div className="row">
                                <div className="col text-center">
                                    <button className="btn btn-outline-light" onClick={this.onFileUpload}>
                                        Done
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

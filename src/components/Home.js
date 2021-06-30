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
        const url = process.env.APP_URL || 'http://localhost:5000/' ;
        axios.post(url, formData);
        history.push("/Tools");
    }

    render() {
        return (
            <div className="blekh">

                <Container>


                    <h1>Please attach your audio file</h1>

                    <div class="row">
                        <form class="md-form">


                            <div class="file-field">
                                <div class="btn btn-secondary btn-lg float-left">

                                    <input name='file' type="file" onChange={this.onFileChange}/>
                                </div>

                                <div class="file-path-wrapper">
                                    <br/>
                                    {/* <input class="file-path validate" type="text" placeholder="Upload your file" /> */}
                                </div>
                            </div>


                            <button onClick={this.onFileUpload} class="btn btn-secondary btn-lg"> Done</button>

                        </form>
                    </div>


                </Container>
            </div>


        );

    }
}

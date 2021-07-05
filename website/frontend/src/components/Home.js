import React, {Component} from 'react';
import './Home.css';
import {Container} from 'react-bootstrap';
import history from './history';
import axios from 'axios';
import Dropzone from '../Dropzone';
import { Download } from 'react-bootstrap-icons';
import DownloadButton from './DownloadButton';


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
        axios.post('http://localhost:5000/', formData);
        history.push("/Tools");
    }

    render() {
        return (
            <div className="blekh">

                <Container>


                    <h1>Please attach your audio file</h1>
                    

                    <div class="row">
                        <form class="md-form">
                            <Dropzone onChange={this.onFileChange}   />

                            <button onClick={this.onFileUpload} class="btn btn-secondary btn-lg">Next</button>
                        </form>
                    </div>


                </Container>
            </div>


        );

    }
}

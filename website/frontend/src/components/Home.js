import React, { Component } from 'react';
import './Home.css';
import { Button,Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {NavMenu} from './NavMenu'
import withRouter from 'react-router-dom';
import history from './history';
import axios from 'axios';

export class Home extends Component {
  state = {
    selectedFile: null
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]});
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


  <div class="file-field">
    <div class="btn btn-secondary btn-lg float-left">

      <input name='file' type="file" onChange={this.onFileChange} />
    </div>

    <div class="file-path-wrapper">
    <br/>
      {/* <input class="file-path validate" type="text" placeholder="Upload your file" /> */}
    </div>
  </div>


 <button onClick={this.onFileUpload} class="btn btn-secondary btn-lg"> Done </button>

</form>
</div>


        </Container>
        </div>


    );

}
}

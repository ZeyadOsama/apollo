import React, { Component } from 'react';
import './Home.css';
import { Button,Container } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import {NavMenu} from './NavMenu'
import withRouter from 'react-router-dom';
export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="blekh">
      
     <Container>

      
            <h1>Please attach your audio file</h1>

            <div class="row">
            <form class="md-form">
  
  
  <div class="file-field">
    <div class="btn btn-secondary btn-lg float-left">
      
      <input type="file" />
    </div>
    
    <div class="file-path-wrapper">
    <br/>
      {/* <input class="file-path validate" type="text" placeholder="Upload your file" /> */}
    </div>
  </div>
</form>
</div>
         
            <a href="/Tools" class="btn btn-secondary btn-lg">Done</a>

            
       

        </Container>
        </div>

       
    );
    
  }
}

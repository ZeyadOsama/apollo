import React, { Component} from 'react';
import { Button, Container } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'

import './Home.css';


export class TwoStems extends Component {
    static displayName = TwoStems.name;





    render() {
        return (
            <div className="">
            <Container>
                <h1>Two Stems Below</h1>
                <hr />
                <br />

                
                  
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <h5 className="">Original Audio File</h5>
                        </div>
                        <div class="col-9">
                            <audio controls className="position-relative" >
                                <source src="/test.mp3" type="audio/mp3"></source>

                            </audio>
                        </div>
                    </div>

                    <hr />
                    <br />

                    <Jumbotron>


                    <div class="row">
                        <div class="col">
                            <h5 className="">Vocal</h5>
                        </div>
                        <div class="col-9">
                            <audio controls className="position-relative" >
                                <source src="/test.mp3" type="audio/mp3"></source>

                            </audio>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div class="row">
                        <div class="col">
                            <h5 className="">Instrumental</h5>
                        </div>
                        <div class="col-9">
                            <audio controls className="position-relative" >
                                <source src="/test.mp3" type="audio/mp3"></source>

                            </audio>
                        </div>
                    </div>

                    </Jumbotron >
 
               
                        </div>

              
            </Container>

            </div>
        
                


           
        );
    }
}

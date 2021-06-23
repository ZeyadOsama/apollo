import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import './Home.css';

export class StemSeparation extends Component {
    static displayName = StemSeparation.name;

    render() {
        return (
            <div className="">
                <Container>

                    <h1>Stem Separation!</h1>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="">

                        <div class="text-center">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="row">
                                            <div class="meh">

                                                <div class="col-md-4"><a id="example1" href="/TwoStems"
                                                                         class="btn btn-outline-secondary btn-lg">2
                                                    Stems Separation
                                                    <h5>Vocal & Instumentals</h5></a></div>

                                                <div class="col-md-4"><a id="example1" href="/FourStems"
                                                                         class="btn btn-outline-secondary btn-lg">4
                                                    Stems Separation
                                                    <h5>Vocal, Bass, Drums<br></br> & Instumentals</h5></a></div>

                                                <div class="col-md-4"><a id="example1" href="/FiveStems"
                                                                         class="btn btn-outline-secondary btn-lg">5
                                                    Stems Separation
                                                    <h5>Vocal, Bass, Drums, Piano<br></br> & Instumentals</h5></a></div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

import React, {Component} from 'react';
import {Container} from 'react-bootstrap';

export class howItWorks extends Component {
    static displayName = howItWorks.name;

    render() {
        return (
            <Container>
                <div class="animation sequence fadeInBottom-narrow">

                    <h1 class="title">
                        How It Works?
                    </h1>

                    <div class="shp-block">
                        <h5 class="subheader">
                            1. Attach.
                        </h5>
                        <p class="paragraph">
                            First thing first, in the home page, you shall find a file attachment box, in which you
                            could attach an audio file that you want to process it.
                        </p>
                    </div>

                    <div class="shp-block">
                        <h5 class="subheader">
                            2. Choose.
                        </h5>
                        <p class="paragraph">
                            After attaching your audio file, you'll be provided by two options, one in which is the stem
                            separation option, whereas the other is the music tagging option; now choose what you'd like
                            to do with your audio file.
                        </p>
                    </div>

                    <div class="shp-block row">
                        <div class="column">
                            <h5 class="subheader">
                                3.1. Stem Separation?
                            </h5>
                            <p class="paragraph">
                                So now that you chose the stem separation option, another option will be provided to
                                you.
                                Variety of stem separation options are offered; two, four and five stems separations are
                                available to be done to you audio file. Results shall then appear after choosing your
                                desired option
                            </p>
                        </div>

                        <div class="column">
                            <h5 class="subheader">
                                3.2. Music Tagging?
                            </h5>
                            <p class="paragraph">
                                Or you decided to choose the music tagging option. Results shall then appear after
                                choosing
                                your desired option
                            </p>
                        </div>
                    </div>

                </div>
            </Container>
        );
    }
}


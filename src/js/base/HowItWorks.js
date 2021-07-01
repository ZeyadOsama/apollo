import React, {Component} from 'react';
import {Container} from "react-bootstrap";

export class howItWorks extends Component {
    static displayName = howItWorks.name;

    render() {
        return (
            <Container>
                <div class="animation sequence fadeInBottom-narrow">

                    <h1 class="title">
                        How It Works?
                    </h1>

                    <div className="shp-block">
                        <h5 className="subheader">
                            1. Attach.
                        </h5>
                        <p className="paragraph">
                            First thing first, in the home page, you shall find a file attachment box, in which you
                            could attach an audio file that you want to process it.
                        </p>
                    </div>

                    <div className="shp-block">
                        <h5 className="subheader">
                            2. Choose.
                        </h5>
                        <p className="paragraph">
                            After attaching your audio file, you'll be provided by two options, one in which is the stem
                            separation option, whereas the other is the music tagging option; now choose what you'd like
                            to do with your audio file.
                        </p>
                    </div>

                    <div className="shp-block">
                        <h5 className="subheader">
                            3. Stem Separation?
                        </h5>
                        <p className="paragraph">
                            So now that you chose the stem separation option, another option will be provided to you.
                            Variety of stem separation options are offered; two, four and five stems separations are
                            available to be done to you audio file. Results shall then appear after choosing your
                            desired option
                        </p>
                    </div>

                    <div className="shp-block">
                        <h5 className="subheader">
                            4. Music Tagging?
                        </h5>
                        <p className="paragraph">
                            Or you decided to choose the music tagging option. Results shall then appear after choosing
                            your desired option
                        </p>
                    </div>

                </div>
            </Container>
        );
    }
}


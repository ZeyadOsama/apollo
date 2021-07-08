import React, {Component} from 'react';
import {Container} from "react-bootstrap";

export class FAQ extends Component {
    render() {
        return (
            <Container>
                <div className="animation sequence fadeInBottom-narrow">

                    <h1 className="title">
                        FAQ
                    </h1>

                    <div className="shp-block">
                        <h5 className="subheader">
                            Why "Apollo"?
                        </h5>
                        <p className="paragraph">
                            Apollo is one of the Olympian deities in classical Greek and Roman religion and Greek and
                            Roman mythology. The national divinity of the Greeks, Apollo has been recognized as a god of
                            archery, music and dance, poetry, and more.
                            <br/><br/>
                            The day he was born, Hermes invented the lyre and stole Apollo’s cattle. So as to appease
                            his older brother after he found out what happened, Hermes offered Apollo his new invention.
                            Ever since then, the lyre became one of Apollo’s most famous attributes, and its most
                            celebrated master.
                            <br/><br/>
                            For this reason and the projection that is caused upon our project we decided to name our
                            project “Apollo”.
                        </p>
                    </div>

                    <div className="shp-block">
                        <h5 className="subheader">
                            What is stem separation?
                        </h5>
                        <p className="paragraph">
                            Stems are simply units of any given audio signal as per the musical jargon; mixing these
                            units, or as we now know, stems, produces complex and harmonized sounds.
                            <br/><br/>
                            Us human beings are superb in isolating these audio signals and process only the sounds we
                            need and suppress those we don’t need to hear. Humans' minds are really magnificent and
                            capable of doing astonishing stuff, yet, with the advancement of technology, it is possible
                            to record or create sounds that we can hear later. Now, various sectors deal with
                            manipulation and study of the sound signals that require stems, thus in that sense, we need
                            algorithms that can separate audio signals effectively.
                            <br/><br/>
                            Since we can pick up little inconsistencies in the sound, the stem separation must be as
                            clear and crisp as possible. Hence, we would harness the capabilities of deep learning,
                            masking and regeneration to recreate individual stems.
                        </p>
                    </div>

                    <div className="shp-block">
                        <h5 className="subheader">
                            What is music tagging?
                        </h5>
                        <p className="paragraph">
                            Music tags is a set of descriptive keywords that carry high-level information about a music
                            clip; those keywords could reveal information about emotion, genre and instrumentation.
                            <br/><br/>
                            Hence, tags could be used for music recommendation and discovery.
                        </p>
                    </div>

                </div>
            </Container>
        );
    }
}

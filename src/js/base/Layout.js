import React, {Component} from 'react';

import {Container} from 'reactstrap';
import {NavigationBar} from '../elements/NavigationBar';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <NavigationBar/>
                <Container>
                    {this.props.children}
                </Container>
            </div>
        );
    }
}

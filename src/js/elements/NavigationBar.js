import React, {Component} from 'react';

import '../../css/styles.css';

export class NavigationBar extends Component {
    render() {
        return (
            <ul>
                <li><a class="float-left" href="/">Apollo</a></li>
                <li><a class="float-right" href="/FAQ">FAQ</a></li>
                <li><a class="float-right" href="/HowItWorks">How It Works?</a></li>
                <li><a class="float-right" href="/">Home</a></li>
            </ul>
        );
    }
}

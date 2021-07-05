import React, {Component} from 'react';

import '../../css/styles.css';

export class NavigationBar extends Component {
    static displayName = NavigationBar.name;

    render() {
        return (
            <ul>
                {/*<li><a class="navbar-brand" href="/">Apollo</a></li>*/}
                <li><a href="/">Home</a></li>
                <li><a href="/HowItWorks">How It Works?</a></li>
                <li><a href="/FAQ">FAQ</a></li>
            </ul>
        );
    }
}

import React, {Component} from 'react';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;


    render() {
        return (


            <ul>
                <li><a class="navbar-brand" href="/">Apollo</a></li>
                <li><a id="nav1" href="/">Home</a></li>
                <li><a id="nav2" href="/howitworks">How It Works?</a></li>
                <li><a id="nav3" href="/faq">FAQ</a></li>

            </ul>


        );
    }
}

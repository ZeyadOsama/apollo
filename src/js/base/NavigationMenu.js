import React, {Component} from 'react';
// import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import '../../css/styles.css';

export class NavigationMenu extends Component {
    static displayName = NavigationMenu.name;

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

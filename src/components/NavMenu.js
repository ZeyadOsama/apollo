import React, {Component} from 'react';
// import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
// import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;


    render() {
        return (


            <ul>
                <li><a class="navbar-brand" href="/">Apollo</a></li>
                <li><a href="/">Home</a></li>
                <li><a href="/howitworks">How It Works?</a></li>
                <li><a href="/faq">FAQ</a></li>

            </ul>


        );
    }
}

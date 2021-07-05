import React from 'react';
import './custom.css'
import Routes from './Routes'
import {NavMenu} from './components/NavMenu'


import {BrowserRouter as Router} from 'react-router-dom';

export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavMenu/>
                    <Routes/>
                </div>
            </Router>
        </div>)
}
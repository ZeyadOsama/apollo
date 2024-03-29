import React from 'react';
import Routes from './Routes'
import {NavigationBar} from './js/elements/NavigationBar'
import {BrowserRouter as Router} from 'react-router-dom';

import './css/styles.css';


export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavigationBar/>
                    <Routes/>
                </div>
            </Router>


            <footer className="footer">
                <p className="small">
                    © 2021 Apollo. All rights reserved.
                </p>
            </footer>
        </div>
    )
}

import React from 'react';
import Routes from './Routes'
import {NavigationMenu} from './js/base/NavigationMenu'
import {BrowserRouter as Router} from 'react-router-dom';

import './css/styles.css';


export default function App() {
    return (
        <div>
            <Router>
                <div>
                    <NavigationMenu/>
                    <Routes/>
                </div>
            </Router>


            <footer class="footer">
                <p class="small">
                    © 2021 Apollo. All rights reserved.
                </p>
            </footer>
        </div>
    )
}
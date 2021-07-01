import React from 'react';
import {Route} from 'react-router';

import {Home} from './js/base/Home';
import {howItWorks} from './js/base/HowItWorks';
import {FAQ} from './js/base/FAQ';
import {Tools} from './js/base/Tools';
import {StemSeparation} from './js/stem-separation/StemSeparation';
import {MusicTagging} from './js/music-tagging/MusicTagging';
import {TwoStems} from './js/stem-separation/TwoStems';
import {FiveStems} from './js/stem-separation/FiveStems';
import {FourStems} from './js/stem-separation/FourStems';
import {Router, Switch} from 'react-router-dom';

import history from './js/base/History'

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/HowItWorks' component={howItWorks}/>
                <Route path='/FAQ' component={FAQ}/>
                <Route path='/Tools' component={Tools}/>
                <Route path='/StemSeparation' component={StemSeparation}/>
                <Route path='/MusicTagging' component={MusicTagging}/>
                <Route path='/TwoStems' component={TwoStems}/>
                <Route path='/FourStems' component={FourStems}/>
                <Route path='/FiveStems' component={FiveStems}/>
            </Switch>
        </Router>
    )
}

export default Routes;

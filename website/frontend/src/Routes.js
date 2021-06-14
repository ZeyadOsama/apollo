import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { howitworks } from './components/howitworks';
import { faq } from './components/faq';
import { Tools } from './components/Tools';
import './custom.css'
import { Footer } from './components/Footer';
import { StemSeparation } from './components/StemSeparation';
import { MusicTagging } from './components/MusicTagging';
import { TwoStems } from './components/TwoStems';
import { FiveStems } from './components/FiveStems';
import { FourStems } from './components/FourStems';
import { NavMenu } from './components/NavMenu';

import { BrowserRouter as Switch, Router } from 'react-router-dom';
import history from './components/history'




//export default class App extends Component {
//    static displayName = App.name;

//    render() {
//        return (
//            <Layout>
//                <Route exact path='/' component={Home} />
//                <Route path='/howitworks' component={howitworks} />
//                <Route path='/faq' component={faq} />
//                <Route path='/Tools' component={Tools} />
//                <Route path='/StemSeparation' component={StemSeparation} />
//                <Route path='/MusicTagging' component={MusicTagging} />
//                <Route path='/TwoStems' component={TwoStems} />
//                <Route path='/FourStems' component={FourStems} />
//                <Route path='/FiveStems' component={FiveStems} />
//            </Layout>
//        );
//    }
//}

function Routes() {

    return(
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/howitworks' component={howitworks} />
                <Route path='/faq' component={faq} />
                <Route path='/Tools' component={Tools} />
                <Route path='/StemSeparation' component={StemSeparation} />
                <Route path='/MusicTagging' component={MusicTagging} />
                <Route path='/TwoStems' component={TwoStems} />
                <Route path='/FourStems' component={FourStems} />
               <Route path='/FiveStems' component={FiveStems} />
            </Switch>
        </Router>
        )
}

export default Routes;

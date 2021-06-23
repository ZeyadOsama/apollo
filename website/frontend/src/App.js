import React from 'react';
import './custom.css'
import Routes from './Routes'
import {NavMenu} from './components/NavMenu'

import {BrowserRouter as Router} from 'react-router-dom';


//export default class App extends Component {
//  static displayName = App.name;

//  render () {
//    return (
//      <Layout>
//            <Route exact path='/' component={Home} />
//            <Route path='/howitworks' component={howitworks} />
//            <Route path='/faq' component={faq} />
//            <Route path='/Tools' component={Tools} />
//            <Route path='/StemSeparation' component={StemSeparation} />
//            <Route path='/MusicTagging' component={MusicTagging} />
//            <Route path='/TwoStems' component={TwoStems} />
//            <Route path='/FourStems' component={FourStems} />
//            <Route path='/FiveStems' component={FiveStems} />
//      </Layout>
//    );
//  }
//}

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
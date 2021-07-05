import React, {Component} from 'react';
import history from './history';
import './HomePage.css';
import group10 from './images/group10.png'
import group4 from './images/group4.png'
import group11 from './images/group11.png'



export class HomePage extends Component {
    static displayName = HomePage.name;


    render() {
        return (
            
            <div id="homepagebabodckground">
                <div className="background1">
                <h1 className="title">APOLLO</h1>
                <p id="subtext">ISOLATE YOUR AUDIO . GET YOUR MUSIC TAGS</p>
                <a class="btn btn-secondary btn-lg start" href="/Home">GET STARTED</a>
                </div>
                <div className="row stem">
                <h2 className="col item">Stem<br/>Separation</h2>
                <img className="col" id="group10"src={group10}></img>
                <img className="col" id="group10"src={group4}></img>
                <h2 className="col item">Music <br/> Tagging</h2>
                <img className="col" id="group11"src={group11}></img>
                
                </div>
            </div>
        );
    }
}
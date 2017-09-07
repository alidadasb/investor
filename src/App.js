import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {SlotMap} from "./slotMap/SlotMap";
import {Profile} from "./profile/Profile";
import {GameManager} from "./core/gameManager";

class App extends Component {
    constructor() {
        super();
        this.gameManager = new GameManager();
        this.gameManager.buildMap(5, 5);
        this.gameManager.registerCallback( ()=> {
            this.setState({time: Math.random()})
        })
    }

    render() {
        let users = [{username: 'Alidad', money: 20000}, {username: 'Sara', money: 20000}];
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Profile users={users}/>
                    <h2>Welcome to React</h2>
                </div>
                <SlotMap/>
            </div>
        );
    }
}

export default App;

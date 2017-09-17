import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {SlotMap} from "./slotMap/SlotMap";
import {Profile} from "./profile/Profile";
import {GameManager} from "./core/gameManager";
import {Tools} from './util/tools'

Array.prototype.sum = function (prop) {
    let total = 0;
    for ( let i = 0, _len = this.length; i < _len; i++ ) {
        total += this[i][prop]
    }
    return total
};


class App extends Component {
    constructor() {
        super();
        this.gameManager = new GameManager();
        this.gameManager.buildMap(5, 5);
        this.gameManager.registerCallback( ()=> {
            this.setState({time: Math.random()})
        })

        this.worker = new Worker('workers/PriceController.js');

        this.worker.addEventListener('message', (data) => {
            let lands = Tools.objToStrMap(data);
            for(let slotKey of lands) {
                console.log(slotKey)
            }
        });

        // setInterval(()=> {
        //     let message = JSON.stringify(Tools.strMapToObj(this.gameManager.lands));
        //     let calc = new PriceCalculator(message);
        //     calc.process();
        //     calc.getData()
        // }, 10000)
    }


    render() {
        let users = [{username: 'Alidad', money: 1000000}, {username: 'Sara', money: 20000}];
        return (
            <div className="App">
                <div className="App-header">
                    <Profile users={users}/>
                    <h2>Welcome to React TURN (${this.gameManager.turn}) </h2>
                    <button onClick={()=> {
                        this.gameManager.play()
                    }}>End Day</button>

                    <button onClick={()=> {
                        for (let day = 0;day< 30; day++) {
                            this.gameManager.play()
                        }
                    }}>End Month</button>
                    <button onClick={()=> {
                        for (let day = 0;day< 30 * 12; day++) {
                            this.gameManager.play()
                        }
                    }}>End Year</button>
                </div>
                <SlotMap/>
            </div>
        );
    }
}

export default App;

import * as React from "react";
import './landSlot.css'
import {GameManager} from "../core/gameManager";
const manager = new GameManager();
export class LandSlot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    selected(location) {

        let land = manager.getLand(location);
        if (manager.isOwnedByGovernment(land)) {
            manager.buy(land)
        }
        else {
            manager.buyBuilding(land)
        }

    }

    renderBuildings() {
        return this.props.land.buildings.map(function (building, index) {
            return <b key={index}>{index}(${building.health})</b>
        })
    }

    render () {
        return (
            <div onClick={ ()=>
                this.selected(this.props.land.location)
            }
                 style={{backgroundColor: this.props.land.owner.color}}
                 className='landSlot'
                 title={this.props.land.address}>
                <b>X</b>
                <div>{this.renderBuildings()}</div>
                <div>A:{this.props.land.address}</div>
                <div>U:{this.props.land.owner.username}</div>
                <div>V:${this.props.land.valueStr}</div>
                <div>BV:${this.props.land.businessValueStr}</div>
                <div>I:${this.props.land.incomeStr} </div>
            </div>
        )
    }
}
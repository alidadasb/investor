import * as React from "react";
import './landSlot.css'
import {GameManager} from "../core/gameManager";
const manager = new GameManager();
export class LandSlot extends React.Component {

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
        this.props.land.buildings.map(function (building, index) {
            return <b>{index}</b>
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
                <div>{this.props.land.address}</div>
                <div>${this.props.land.value}</div>
                <div>{this.props.land.owner.username}</div>
            </div>
        )
    }
}
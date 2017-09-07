import * as React from "react";
import './landSlot.css'
import {GameManager} from "../core/gameManager";
export class LandSlot extends React.Component {

    selected(location) {
        new GameManager().buy(location)
    }

    render () {
        console.log(this.props.land.ownedByUser());
        return (
            <div onClick={ ()=> this.selected(this.props.land.location) } className={'landSlot ' + (this.props.land.ownedByUser() ? 'sold' : 'unsold' )} title={this.props.land.address}>
                <b>X</b>
                <div>{this.props.land.address}</div>
                <div>${this.props.land.value}</div>
                <div>{this.props.land.owner.username}</div>
            </div>
        )
    }
}
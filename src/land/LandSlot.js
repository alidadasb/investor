import * as React from "react";
import './landSlot.css'
import {GameManager} from "../core/gameManager";
export class LandSlot extends React.Component {

    selected(location) {
        new GameManager().buy(location)
    }

    render () {
        return (
            <div onClick={ ()=> this.selected(this.props.land.location) }
                 style={{backgroundColor: this.props.land.owner.color}}
                 className='landSlot'
                 title={this.props.land.address}>
                <b>X</b>
                <div>{this.props.land.address}</div>
                <div>${this.props.land.value}</div>
                <div>{this.props.land.owner.username}</div>
            </div>
        )
    }
}
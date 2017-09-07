import * as React from "react";
import {LandSlot} from "../land/LandSlot";
import './slotMap.css'
import {GameManager} from '../core/gameManager'

export class SlotMap extends React.Component {

    constructor(params) {
        super(params);
        this.state = {};
        this.gameManagerInstance = new GameManager()
    }


    renderRows() {
        let rows = [];

        for (let row = this.gameManagerInstance.size.rows; row > 0; row--) {
            rows.push(<div className="divTableRow" key={row}> {this.renderCols(row)} </div>)
        }
        return (rows)
    }

    renderCols(row) {
        let cols = [];
        for (let col = this.gameManagerInstance.size.cols; col > 0; col--) {
            cols.push(
                <div className="divTableCell" key={this.gameManagerInstance.key(col, row)}>
                    <LandSlot land={ this.gameManagerInstance.getLand({col,row}) } key={this.gameManagerInstance.key(col, row) + '_cell' } />
                </div>
            )
        }
        return cols
    }

    render() {
        return (
            <div className="divTable">
                <div className="divTableBody">
                    {this.renderRows()}
                </div>
            </div>
        )
    }
}
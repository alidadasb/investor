import lodash from 'lodash'
import {GameManager} from "../core/gameManager";

export class Land {
    constructor(id, location, landValue) {
        this.id = id;
        this.location = location;
        this.owner = null;
        this.districtIndex = Math.floor(Math.random() * 10);
        this.landValue = landValue;
        this.options = {};
        this.buildings = []
    }

    constructBuilding(building) {
        building.districtIndex = this.districtIndex;
        this.buildings.push(building)
    }

    set(params) {
        lodash.merge(this.options, params)
    }


    get value() {
        return this.buildings.sum('value')  + this.landValue
    }

    get address() {
        return `${this.location.col}-${this.location.row}`
    }

    setOwner(name) {
        this.owner = name
    }

    ownedByUser() {
        let id = new GameManager().GOVERNMENT.id;
        return this.owner && this.owner.id !== id;
    }

    getIncome () {
        let buildingIncome = 0;
        this.buildings.forEach( building => {
            buildingIncome+= building.income
        })

        return buildingIncome
    }
}
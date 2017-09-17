import lodash from 'lodash'
import {GameManager} from "../core/gameManager";
import {InvestorObject} from "../InvestorObject";

export class Land extends InvestorObject{
    constructor(id, location, landValue) {
        super();
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
        return this.round(this.landValue)
    }

    get valueStr() {
        return this.numberWithCommas(this.value)
    }


    get businessValue() {
        return this.round (this.buildings.sum('value'))
    }

    get businessValueStr() {
        return this.numberWithCommas(this.businessValue)
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

    get income() {
        return this.buildings.sum('income')
    }

    get incomeStr() {
        return this.comma(this.income)
    }

}
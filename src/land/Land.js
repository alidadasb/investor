import lodash from 'lodash'
import {GameManager} from "../core/gameManager";

export class Land {
    constructor(id, location, price) {
        this.id = id;
        this.location = location;
        this.owner = null;
        this.options = {
            value: price
        }
    }

    set(params) {
        lodash.merge(this.options, params)
    }

    get value() {
        return this.options.value
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
}
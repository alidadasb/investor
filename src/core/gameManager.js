import {Land} from "../land/Land";
import * as lodash from "lodash";
import {LandInvoice} from "./LandInvoice";
import {Government} from "./Government";

let instance = null;

export class GameManager {
    constructor() {
        if (!instance) {
            instance = this
        }

        this.GOVERNMENT = new Government('government', 1000000);
        this.users = new Map();
        this.currentUserId = undefined;
        this.lands = new Map();
        this._turn = 0;
        this.tasks = [];
        return instance
    }

    reset() {
        this._turn = 0
    }

    _playTurn() {
        for (let [key, land] of this.lands) {
                land.owner.account.deposit(land.income)
            }
    }

    play() {
        this._turn++;

        let temp = this.tasks.filter(t => {
            if (t) {
                return t.execute()
            }

            return true
        });

        this.tasks = temp;

        this._playTurn();
        this.update();
        return this.turn

    }

    get turn() {
        return this._turn
    }

    registerCallback(method) {
        this.callback = method
    }

    activateUser(userId) {
        this.currentUserId = userId
    }


    buyBuilding(land) {
        let user = this.getUser(this.currentUserId);
        let contract = this.GOVERNMENT.buyBuilding(land, user);
        if (contract) {
            this.tasks.push(contract);
        }


        this.update();
    }

    buy(land) {
        let user = this.getUser(this.currentUserId);

        if (!user.canAfford(land.value)) {
            alert(`${user.username} cannot afford to purchase lot ${land.address}`);
            return;
        }


        if (this.canBeSold(land) && window.confirm(` ${user.username}! Are you sure you want to purchase lot ${land.address} ?`)) {
            let invoice = new LandInvoice(this.GOVERNMENT.account, land.value, land);
            user.buyLand(invoice)
        }

        this.update()
    }

    canBeSold(land) {
        return this.isOwnedByGovernment(land) && land.owner.id !== this.currentUserId;
    }

    isOwnedByGovernment(land) {
        return land.owner === this.GOVERNMENT;
    }

    key(x, y) {
        return `${x}-${y}`;
    }

    buildMap(rows, cols) {
        this.size = {rows, cols};

        for (let row = rows; row > 0; row--) {
            for (let col = cols; col > 0; col--) {
                let land = new Land(this.key(col, row), {col: col, row: row}, lodash.random(100000, 300000));
                land.owner = this.GOVERNMENT;
                this.lands.set(this.key(col, row), land);
            }
        }
        return this.lands
    }

    getUser(userId) {
        return this.users.get(userId);
    }

    getLand(location) {
        return this.lands.get(this.key(location.col, location.row));
    }

    register(user) {
        this.users.set(user.id, user);

        if (!this.currentUserId) {
            this.activateUser(user.id)
        }
    }

    usersList() {
        return [...this.users.keys()];
    }

    update() {
        if (this.callback) {
            this.callback()
        }
    }

}


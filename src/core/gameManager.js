import {Land} from "../land/Land";
import * as lodash from "lodash";
import {Invoice} from "./Invoice";
import {User} from "../user/User";

let instance = null;

export class GameManager {
    constructor() {
        if (!instance) {
            instance = this
        }

        this.GOVERNMENT = new User('government', 100000);
        this.users = new Map();
        this.currentUserId = undefined;
        this.lands = new Map();
        return instance
    }

    registerCallback(method) {
        this.callback = method
    }

    activateUser(userId) {
        this.currentUserId = userId
    }

    buy(location) {
        let user = this.getUser(this.currentUserId);
        let land = this.getLand(location);

        if (!user.canAfford(land)) {
            alert(`${user.username} cannot afford to purchase lot ${land.address}`);
            return;
        }


        if (this.canBeSold(land) && window.confirm(` ${user.username}! Are you sure you want to purchase lot ${land.address} ?`)) {
            let invoice = new Invoice(this.GOVERNMENT.account, land.value, land);
            user.buy(invoice)
        }

        this.update()
    }

    canBeSold(land) {
        return land.owner === this.GOVERNMENT && land.owner.id !== this.currentUserId;
    }

    key(x, y) {
        return `${x}-${y}`;
    }

    buildMap(rows, cols) {
        this.size = {rows, cols};

        for (let row = rows; row > 0; row--) {
            for (let col = cols; col > 0; col--) {
                let land = new Land(this.key(col, row), {col: col, row: row}, lodash.random(100, 10000));
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


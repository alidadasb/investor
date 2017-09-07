/* eslint-disable */
import {Account} from "../core/Account";

export  class User {
    constructor(name, money) {
        this.username = name;
        this.id = this.uuidv4();
        this.account = new Account(name, money);
        this.properties = {}
    }


    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    buy(invoice) {
        this.properties[location] = invoice.pay(this);
    }

    canAfford(land) {
        return land.value <= this.account.balance
    }

}
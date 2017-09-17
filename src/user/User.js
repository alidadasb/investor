/* eslint-disable */
import {Account} from "../core/Account";
import {InvestorObject} from "../InvestorObject";

export  class User extends InvestorObject{
    constructor(name, money) {
        super();
        this.username = name;
        this.color = this.getRandomColor();
        this.id = this.uuidv4();
        this.account = new Account(name, money);
        this.properties = {}
    }

    buyLand(invoice) {
        this.properties[location] = invoice.pay(this);
    }

    canAfford(value) {
        return value <= this.account.balance
    }

}
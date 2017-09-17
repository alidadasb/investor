export class Account {
    constructor(name, money) {
        this.name = name;
        this._balance = money || 0
    }

    get balance (){
        return this._balance
    }

    widthraw(money) {
        this._balance -= money;

        this.check();

        return money
    }

    deposit(money) {
        this._balance += money;

        this.check();

        return money
    }

    check() {
        if (this.balance < 0) {
            throw new Error(`Account has no balance, current balance  ${this.balance}` )
        }
    }

}

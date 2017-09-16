export class Account {
    constructor(name, money) {
        this.name = name;
        this.balance = money || 0
    }

    widthraw(money) {
        this.balance -= money;

        this.check();

        return money
    }

    deposit(money) {
        this.balance += money;

        this.check();

        return money
    }

    check() {
        if (this.balance < 0) {
            throw new Error(`Account has no balance, current balance  ${this.balance}` )
        }
    }

}

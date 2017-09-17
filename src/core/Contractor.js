import {User} from "../user/User";

export class Contractor {
    constructor() {
        this.owner = new User('Jafar' , 1000000)
    }

    estimate(building) {
        return building.constructionCost * 0.1
    }

    sign(contract) {
        this.contract = contract;
        this.work = contract.building.constructionTurn;
        return this.owner.account
    }

    build() {
        if (this.contract.building.underConstruction() && this.work > 0) {
            return --this.work
        }

        return 0
    }


}
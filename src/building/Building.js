import {InvestorObject} from "../InvestorObject";

export class Building extends InvestorObject {
    constructor(type, _constructionCost, constructionTurn) {
        super();
        this.type = type;
        this.businesses = [];
        this._contructionCost = _constructionCost;
        this.health = 0;
        this.constructionTurn = constructionTurn
    }

    underConstruction() {
        return this.health < this.constructionTurn
    }

    build(work) {
        console.log(work);
        if (this.underConstruction()) {
            this.health = (this.constructionTurn - work);
            return work;
        }

        return 0
    }

    addBusiness(business) {
        if (this.type === business.buildingRequirement) {
            this.businesses.push(business)
        }
        else {
            console.log(business);
            throw new Error('non compatible business')
        }
    }

    get value() {
        return (this.businesses.sum('value') + this.constructionCost * ( 1.3 / this.constructionTurn) * this.health)
    }

    get valuation() {
        return this.businesses.sum('value') + this.constructionCost * (1.3)
    }

    get constructionCost() {
        return this._contructionCost
    }

    get income() {
        return this.health === this.constructionTurn ? this.businesses.sum('netOperatingIncome'): 0
    }

}
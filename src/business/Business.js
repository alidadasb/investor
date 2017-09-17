export class Business {
    constructor(buildingRequirement, salePrice) {
        this.buildingRequirement = buildingRequirement;
        this.incomes  = [];
        this.expences = [];
        this.vacancy = 0;
        this.creditLoss = 0;
        this.salePrice = salePrice;
    }

    get grossPotentialIncome() {
        return this.expences.sum('value')
    }

    get grossOperatingIncome () {
        return this.grossPotentialIncome - this.vacancy - this.creditLoss
    }

    get operatingExpenses () {
       return this.expences.sum('value')
    }

    get netOperatingIncome() {
        return this.grossOperatingIncome - this.operatingExpenses
    }

    get value() {
        return this.capRate * this.netOperatingIncome
    }

    get capRate() {
        return this.netOperatingIncome / this.salePrice
    }

}
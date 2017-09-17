export class ConstructionContract {
    constructor(buyer, government, building, land, contractor) {
        this.buyer = buyer;
        this.government = government;
        this.building = building;
        this.land = land;
        this.contractor = contractor;

        let governmentCost = this.government.evaluateConstructionCost(land, building);
        let estimate = contractor.estimate(building);

        if (!this.buyer.canAfford(estimate + governmentCost)) {
            throw  new Error ('user cannot afford building cost')
        }

        this.government.account.deposit(this.buyer.account.widthraw(governmentCost));
        this.building.licence = this.government.getLicense();

        this.installment = estimate  / this.building.constructionTurn;

        this.contractor.sign(this, this.installment)


    }

    execute() {
        this.contractor.owner.account.deposit(this.buyer.account.widthraw(this.installment));
        let remainingWork = this.building.build(this.contractor.build(this));

        return remainingWork > 0
    }
}


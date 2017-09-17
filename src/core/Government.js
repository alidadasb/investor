import {User} from "../user/User";
import {ConstructionContract} from "../building/ConstructionContract";
import {ResidentialProperty} from "../business/ResidentialProperty";
import {Building} from "../building/Building";
import {Contractor} from "./Contractor";
import {BuildingTypes} from "../building/BuildingTypes"

export class Government extends User {
    constructor(name, money) {
        super(name, money);
        this.tax = 0.03;
        this.activeContractors = 0
    }

    evaluateConstructionCost(land, building) {
        return (land.value * 0.03 + building.constructionCost * 0.02) * (1 + this.tax)
    }

    getLicense() {
        return "1234"
    }

    buyBuilding(land, user) {
        console.log('buying building', land);
        let constructionContract;

        let building = new Building(BuildingTypes.residential, 500000, 5);
        building.addBusiness(new ResidentialProperty());

        let salePrice = 1.1 * building.valuation;

        let governmentCost = this.evaluateConstructionCost(land, building);
        let contractor = this.getContractor();
        let contractorFees = contractor.estimate(building);

        let value = salePrice + contractorFees + governmentCost;


        if (!window.confirm(`Are you sure you want to pay ${this.comma(value)} `)) {
            return;
        }

        if (!user.canAfford(value)) {
            alert(`${user.username} cannot afford to complete the construction cost ${value}`);
            return;
        }


        this.account.deposit(user.account.widthraw(salePrice));


        constructionContract = new ConstructionContract(user, this, building, land, contractor);
        if (constructionContract) {
            land.constructBuilding(building);
        }

        return constructionContract
    }

    getContractor() {
        let contractor = new Contractor();
        this.activeContractors++;
        return contractor
    }
}

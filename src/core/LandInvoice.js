export class LandInvoice {
    constructor(sellerAccount, amount, collateralProperty) {
        this.sellerAccount = sellerAccount;
        this.amount = amount;
        this.collateralLand = collateralProperty
    }

    void () {
        this.sellerAccount = this.amount = this.collateralLand = null
    }

    pay(buyer) {
        this.sellerAccount.deposit(buyer.account.widthraw(this.amount));
        this.collateralLand.setOwner(buyer);
        console.log(`Land @ ${this.collateralLand.address} purchased by ${buyer.username} for ${this.amount}`);
        this.void();
        return this.collateralLand;
    }
}
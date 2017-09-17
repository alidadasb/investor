export class PriceCalculator {
    constructor (dataString) {
        this.data = JSON.parse(dataString)
    }

    process () {

        for(let slotKey in this.data) {
            if (this.data.hasOwnProperty(slotKey)) {
                this.calculate(this.data[slotKey])
            }
        }
    }

    calculate(land) {
        console.log(land)
    }

    getData() {
        //
    }
}
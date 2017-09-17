import * as lodash from "lodash";

export class InvestorObject {
    constructor(){
        this._id = Math.floor(Math.random() * 1000000000)
    }

    uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    comma(x) {
        return this.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    round (number) {
        return lodash.round (number, 1)
    }



}
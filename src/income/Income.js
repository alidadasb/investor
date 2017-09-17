import {InvestorObject} from "../InvestorObject";

export class Income extends InvestorObject{
    constructor (type, _hourly) {
        super();
        this.type = type;
        this._hourly = _hourly;
        console.log(_hourly);
    }

    get yearly() {
      return this.monthly * 12
    }

    get monthly () {
        return this.daily * 30
    }

    get daily() {
        return this.hourly * 24
    }

    get hourly(){
        return this._hourly
    }

    get value() {
        return this.round(this.daily)
    }
}
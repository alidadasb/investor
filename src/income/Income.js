export class Income {
    constructor (type, _hourly) {
        this.type = type;
        this._hourly = _hourly
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
        return this.yearly
    }
}
import {Income} from "../income/Income";

export class Expense extends Income{
    constructor (type, _hourly) {
        super(type, _hourly)
    }
}
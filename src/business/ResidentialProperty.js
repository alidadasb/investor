import {Business} from "./Business";
import {BusinessTypes} from "./BusinessTypes";
import {Income} from "../income/Income";
import {Tools} from '../util/tools';
import {Expense} from "../expense/Expense";

export class ResidentialProperty extends Business {
    constructor (salePrice) {
        super(BusinessTypes.residential, salePrice);
        console.log(salePrice);
        this.incomes.push(new Income('unit1', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit2', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit3', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit4', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit5', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit6', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit7', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit8', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 1)));
        this.incomes.push(new Income('unit9', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 2)));
        this.incomes.push(new Income('unit10', Tools.calDailyPerYearlyIncomePercentage(this.salePrice, 2)));

        this.expences.push(new Expense('snow removal', Tools.convertYearlyToHourly(15000)));
        this.expences.push(new Expense('landscaping', Tools.convertYearlyToHourly(25000)));
    }
}
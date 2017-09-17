export class Tools {
    static strMapToObj (strMap) {
        let obj = Object.create(null);
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }

    static objToStrMap (obj) {
        let strMap = new Map();
        for (let k of Object.keys(obj)) {
            strMap.set(k, obj[k]);
        }
        return strMap;
    }

    static convertYearlyToHourly(yearly) {
        return yearly / 12 / 30 / 24
    }

    static convertMonthlyToHourly(monthly) {
        return monthly / 30 / 24
    }

    static convertDailyToHourly(daily) {
        return daily / 24
    }

    static calDailyPerYearlyIncomePercentage(value, percentage) {
        return Tools.convertYearlyToHourly(value * percentage / 100)
    }
}
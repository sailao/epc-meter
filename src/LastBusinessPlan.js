const UNIT_PRICE_300001_OVER        = 100;
const UNIT_PRICE_20001_300000       = 125;
const UNIT_PRICE_50001_200000       = 150;
const UNIT_PRICE_10001_50000        = 125;
const UNIT_PRICE_5001_10000         = 100;
const UNIT_PRICE_UNDER_5000         = 75;

const LastBusinessPlan = (units) => {
    var price = 0;

    if (units > 300000) {
        price += (units-300000) * UNIT_PRICE_300001_OVER;
        units = 300000;
    }
    if (units > 200000) {
        price += (units - 200000) * UNIT_PRICE_20001_300000;
        units = 200000;
    }
    if (units > 50000) {
        price += (units - 50000) * UNIT_PRICE_50001_200000;
        units = 50000;
    }
    if (units > 10000) {
        price += (units - 10000) * UNIT_PRICE_10001_50000;
        units = 10000;
    }
    if (units > 5000) {
        price += (units - 5000) * UNIT_PRICE_5001_10000;
        units = 5000;
    }

    price += units * UNIT_PRICE_UNDER_5000;

    return price;
}

export default LastBusinessPlan;
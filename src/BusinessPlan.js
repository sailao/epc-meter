const UNIT_PRICE_100001_OVER        = 180;
const UNIT_PRICE_50001_100000       = 175;
const UNIT_PRICE_20001_50000        = 165;
const UNIT_PRICE_10001_20000        = 155;
const UNIT_PRICE_5001_10000         = 145;
const UNIT_PRICE_501_5000           = 135;
const UNIT_PRICE_UNDER_500          = 125;

const NotHomePlan = (units) => {
    var price = 0;

    if (units > 100000) {
        price += (units-100000) * UNIT_PRICE_100001_OVER;
        units = 100000;
    }
    if (units > 50000) {
        price += (units - 50000) * UNIT_PRICE_50001_100000;
        units = 50000;
    }
    if (units > 20000) {
        price += (units - 20000) * UNIT_PRICE_20001_50000;
        units = 20000;
    }
    if (units > 10000) {
        price += (units - 10000) * UNIT_PRICE_10001_20000;
        units = 10000;
    }
    if (units > 5000) {
        price += (units - 5000) * UNIT_PRICE_5001_10000;
        units = 5000;
    }
    if (units > 500) {
        price += (units - 500) * UNIT_PRICE_501_5000;
        units = 500;
    }
    price += units * UNIT_PRICE_UNDER_500;

    return price;
}

export default NotHomePlan;
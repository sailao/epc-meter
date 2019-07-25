const UNIT_PRICE_201_OVER      = 50;
const UNIT_PRICE_101_200       = 40;
const UNIT_PRICE_UNDER_100     = 35;

const LastHomePlan = (units) => {
    var price = 0;

    if (units > 200) {
        price += (units-200) * UNIT_PRICE_201_OVER;
        units = 200;
    }

    if (units > 100) {
        price += (units - 100) * UNIT_PRICE_101_200;
        units = 100;
    }

    price += units * UNIT_PRICE_UNDER_100;

    return price;
}

export default LastHomePlan;
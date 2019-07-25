const UNIT_PRICE_201_OVER     = 125;
const UNIT_PRICE_151_200      = 120;
const UNIT_PRICE_101_150      = 110;
const UNIT_PRICE_76_100       = 90;
const UNIT_PRICE_51_75        = 70;
const UNIT_PRICE_31_50        = 50;
const UNIT_PRICE_UNDER_30     = 35;

// const meter = {
//     home_plan: [
//         {
//             UNIT_PRICE_201_OVER: 125,
//             set_unit: 200,
//         },
//         { 
//             UNIT_PRICE_151_200: 120,
//             set_unit: 150,
//         },
//         { 
//             UNIT_PRICE_101_150   : 110,
//             set_unit: 100,
//         },
//         { 
//             UNIT_PRICE_76_100    : 90,
//             set_unit: 75,
//         },
//         { 
//             UNIT_PRICE_51_75     : 70,
//             set_unit: 50,
//         },
//         { 
//             UNIT_PRICE_31_50     : 50,
//             set_unit: 30,
//         },
//         { 
//             UNIT_PRICE_UNDER_30     : 35,
//             set_unit: 0,
//         }
//     ],
//     business_plan : [
//         {
//             UNIT_PRICE_100001_OVER   : 185,
//             set_unit : 100000,
//         },
//         {
//             UNIT_PRICE_50001_100000  : 175,
//             set_unit : 50000,
//         },
//         {
//             UNIT_PRICE_20001_50000   : 156,
//             set_unit : 20000,
//         },
//         {
//             UNIT_PRICE_10001_20000   : 155,
//             set_unit : 10000,
//         },
//         {
//             UNIT_PRICE_5001_10000    : 145,
//             set_unit : 5000,
//         },
//         {
//             UNIT_PRICE_501_5000      : 135,
//             set_unit : 500,
//         },
//         {
//             UNIT_PRICE_UNDER_500     : 125,
//             set_unit : 0,
//         }
//     ],
//     last_home_plan:[
//         {
//             UNIT_PRICE_201_OVER : 50,
//             set_unit: 200,
//         },
//         {
//             UNIT_PRICE_101_200  : 40,
//             set_unit: 100,
//         },
//         {
//             UNIT_PRICE_UNDER_100: 35,
//             set_unit: 0,
//         },
//     ],
//     last_business_plan:[
//         {
//             UNIT_PRICE_300001_OVER  : 100,
//             set_unit:300000,
//         },
//         {
//             UNIT_PRICE_20001_300000 : 125,
//             set_unit:200000,
//         },
//         {
//             UNIT_PRICE_50001_200000 : 150,
//             set_unit:50000,
//         },
//         {
//             UNIT_PRICE_10001_50000  : 125,
//             set_unit:10000,
//         },
//         {
//             UNIT_PRICE_5001_10000   : 100,
//             set_unit:5000,
//         },
//         {
//             UNIT_PRICE_UNDER_5000  :  75,
//             set_unit:0,
//         },
//     ]
// };

const Plan = (units) => {
    // const [a, setA] = useState(100);
    var price = 0;

    if (units > 200) {
        price += (units-200) * UNIT_PRICE_201_OVER;
        units = 200;
    }
    if (units > 150) {
        price += (units - 150) * UNIT_PRICE_151_200;
        units = 150;
    }
    if (units > 100) {
        price += (units - 100) * UNIT_PRICE_101_150;
        units = 100;
    }
    if (units > 75) {
        price += (units - 75) * UNIT_PRICE_76_100;
        units = 75;
    }
    if (units > 50) {
        price += (units - 50) * UNIT_PRICE_51_75;
        units = 50;
    }
    if (units > 30) {
        price += (units - 30) * UNIT_PRICE_31_50;
        units = 30;
    }
    price += units * UNIT_PRICE_UNDER_30;

    return price;
}

export default Plan;
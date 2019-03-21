/* eslint-disable camelcase */
/*
this file makes the object that will contain the pricing to send back
i am thinking that this file should export a class of prize?
with methods that fill it out? what could go wrong?
async functions dont play nice? i only need to calc them once
/*
Prices = {
  startCoords: { startLat, startLng },
  endCoords: { endLat, endLng },
  distance: int,
  uber: {
    'X': '$10',
    'Lux': '$55',
  },

  lyft: {
    'Line': '$12',
    'Premier': '$45',
  },

  gas: '$18',
  avgGallon: 3.50,
  bird: '$30',
}
*/

const { getUberPrices } = require('./uberApi');
const { getLyftPrices } = require('./lyftApi');
const { findCityCoordsAndGas } = require('../cityData');

const getAllUberLinesAndPrices = (uberPriceArray) => {
  // this function iterates through the uber price array
  // extracting the clean name of the ride line and price
  // returning a nice object for prices
  const uberObj = {};

  uberPriceArray.forEach(({ display_name, high_estimate }) => {
    uberObj[display_name] = `$${high_estimate * 2}`;
  });

  return uberObj;
};

const getAllLyftLinesAndPrices = (lyftPriceArray) => {
  const lyftObj = {};

  lyftPriceArray.forEach(({ display_name, estimated_cost_cents_max }) => {
    const high_estimate = `$${(estimated_cost_cents_max / 100) * 2}`;
    lyftObj[display_name] = high_estimate;
  });

  return lyftObj;
};

const getDailyGasCost = (distance, mpg, costPerGallon) => {
  const gallonsNeeded = (distance / mpg);
  const totalCost = (gallonsNeeded * costPerGallon).toFixed();

  return `$${totalCost}`;// a string thats $10
};

const getBirdPrice = (mins) => {
  const time = mins * 3;
  const price = `$${(1 + (0.15 * time)).toFixed()}`;
  return price;
};

const getPrice = async (startCity, endCity, mpg = 25) => {
// this function needs to return an object with all the info
// in the same shape as above
// the uber and lyft apis need to provide the information for the properties

  const { lat: startLat, lng: startLng, gallon: costPerGallon } = findCityCoordsAndGas(startCity);
  const { lat: endLat, lng: endLng } = findCityCoordsAndGas(endCity);

  // uber api return array
  const { prices: uberPrices } = await getUberPrices(startLat, startLng, endLat, endLng);
  // lyft api return array
  const { cost_estimates: lyftPrices } = await getLyftPrices(startLat, startLng, { endLat, endLng });
  const distance = uberPrices[0].distance * 2;
  const duration = (uberPrices[0].duration / 60) * 2;

  const uberRides = getAllUberLinesAndPrices(uberPrices);
  const lyftRides = getAllLyftLinesAndPrices(lyftPrices);
  const dailyGasCost = getDailyGasCost(distance, mpg, costPerGallon);
  const birdPrice = getBirdPrice(duration);

  return {
    startCoords: { startLat, startLng },
    endCoords: { endLat, endLng },
    birdPrice,
    distance,
    uberRides,
    lyftRides,
    dailyGasCost,
    costPerGallon,
  };
};

getPrice('corona', 'anaheim').then(obj => console.log(obj));

module.exports = getPrice;

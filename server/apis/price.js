/* eslint-disable max-len */
/* eslint-disable camelcase */

const { getUberPrices } = require('./uberApi');
const { getLyftPrices } = require('./lyftApi');
const { findCityCoordsAndGas } = require('../cityData');

const getAllUberLinesAndPrices = (uberPriceArray) => {
  // this function iterates through the uber price array
  // extracting the clean name of the ride line and price
  // returning a nice object for prices
  const uberObj = {};
  if (uberPriceArray === undefined) return uberObj;
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
  const { prices: uberPrices } = await getUberPrices(startLat, startLng, endLat, endLng)
    .catch((err) => {
      console.log(err, 'in getPrice');
      return [];
    });
  // lyft api return array
  const { cost_estimates: lyftPrices } = await getLyftPrices(startLat, startLng, { endLat, endLng });
  const distance = lyftPrices[0].estimated_distance_miles * 2;
  const duration = (lyftPrices[0].estimated_duration_seconds / 60) * 2;

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
module.exports = getPrice;

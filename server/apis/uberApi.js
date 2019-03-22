/* eslint-disable arrow-body-style */
const Uber = require('node-uber');
const { uberServer } = require('../../config.js');

const uber = new Uber({
  server_token: uberServer,
  redirect_uri: 'http://localhost:3000',
  name: 'commuterBuddy',
});

const getUberPrices = (startLat, startLng, endLat, endLng) => {
  return uber.estimates.getPriceForRouteAsync(startLat, startLng, endLat, endLng);
};

module.exports = {
  getUberPrices,
};

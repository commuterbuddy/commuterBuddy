/* eslint-disable arrow-body-style */
const Uber = require('node-uber');
const {
  uberServer,
  // uberClient,
  // uberSecret,
  // lyftToken,
} = require('../config');

const uber = new Uber({
  server_token: uberServer,
  redirect_uri: 'http://localhost:3000',
  name: 'commuterBuddy',
});

const getUberPrices = (startLat, startLong, endLat, endLong) => {
  return uber.estimates.getPriceForRouteAsync(startLat, startLong, endLat, endLong)
    .catch(err => console.log(err));
};

module.exports = {
  getUberPrices,
};

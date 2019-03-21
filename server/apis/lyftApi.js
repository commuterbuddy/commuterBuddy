const lyft = require('node-lyft');
const { lyftToken } = require('../../config.js');

// LYFT API AUTHORIZATION
const defaultClient = lyft.ApiClient.instance;
defaultClient.authentications['Client Authentication'].accessToken = lyftToken;


const lyftPublicApi = new lyft.PublicApi();

const getLyftCost = (startLat, startLng, opts) => lyftPublicApi.getCost(startLat, startLng, opts)
  .catch(err => err);

module.exports = {
  getLyftCost,
};

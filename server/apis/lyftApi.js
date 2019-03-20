const lyft = require('node-lyft');

const lyftPublicApi = new lyft.PublicApi();

const getLyftCost = (startLat, startLng, opts) => lyftPublicApi.getCost(startLat, startLng, opts)
  .catch(err => console.log(err));

module.exports = {
  getLyftCost,
};

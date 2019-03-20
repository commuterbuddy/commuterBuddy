const axios = require ('axios');
const {lyftToken, gasToken} = require('../config.js');
const lyft = require('node-lyft');
let lyftData;

// LYFT API AUTHORIZATION
const defaultClient = lyft.ApiClient.instance;
defaultClient.authentications['Client Authentication'].accessToken = lyftToken;

// MY GAS FEED API AUTHORIZATION

module.exports = {
  lyft: {
    get: (req, res) => {

      // const {startLat, startLng, endLat, endLng} = req.params;
      const lyftPublicApi = new lyft.PublicApi();

      let startLat = 33.9626;
      let startLng = -118.3988;

      let opts = {
        'endLat': 33.8366,
        'endLng': -117.9143
      };

      lyftPublicApi.getCost(startLat, startLng, opts)
      .then((data) => {
        res.status(200).send(data)
      })
      .catch(err => {
        res.status(404).send('Error getting data', err)
      });
    }
  }

};


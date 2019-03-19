const Uber = require('node-uber');
const { uberServer, uberClient, uberSecret, lyftToken } = require('../config.js');
const lyft = require('node-lyft');
let lyftData;

// LYFT API AUTHORIZATION
const defaultClient = lyft.ApiClient.instance;
defaultClient.authentications['Client Authentication'].accessToken = lyftToken;

module.exports = {
  uber: {
    get: (req, res) => {
      let uber = new Uber({
        // client_id: uberClient,
        // client_secret: uberSecret,
        server_token: uberServer,
        redirect_uri: 'http://localhost:3000',
        name: 'commuterBuddy'
      });
      
      const start_lat = 33.9757652;
      const start_long = -118.3876126;
      const end_lat = 34.2381;
      const end_long = -118.5301;

      uber.estimates.getPriceForRouteAsync(start_lat, start_long, end_lat, end_long)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err))
    }
  },
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
}

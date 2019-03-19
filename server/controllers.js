const Uber = require('node-uber');
const { uberServer, uberClient, uberSecret } = require('../config.js');

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
  }
}
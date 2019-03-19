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
      
      const start_lat = 37.761492;
      const start_long= -122.423941;
      const end_lat = 37.775393;
      const end_long = -122.417546;

      uber.estimates.getPriceForRouteAsync(start_lat, start_long, end_lat, end_long)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err))
    }
  }
}
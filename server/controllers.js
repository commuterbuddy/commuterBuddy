const { getLyftPrices } = require('./apis/lyftApi');
const { getUberPrices } = require('./apis/uberApi');
const getPrice = require('./apis/price');

module.exports = {
  // this property handles client requests for uber's endpoints using various methods
  uber: {
    get: (req, res) => {
      const startLat = 33.9757652;
      const startLng = -118.3876126;
      const endLat = 34.2381;
      const endLng = -118.5301;

      getUberPrices(startLat, startLng, endLat, endLng)
        .then(data => res.status(200).send(data))
        .catch(err => console.error(err));
    },
  },
  // this property handles client requests for lyft's endpoints using various methods
  lyft: {
    get: (req, res) => {
      // const {startLat, startLng, endLat, endLng} = req.params;
      const startLat = 33.9757652;
      const startLng = -118.3876126;
      const opts = { endLat: 34.2381, endLng: -118.5301 };

      getLyftPrices(startLat, startLng, opts)
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((err) => {
          res.status(404).send('Error getting data', err);
        });
    },
  },
};

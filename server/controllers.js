const getPrice = require('./apis/price');
const dummyData = require('./dummyData.js');

module.exports = {
  getPrices: (req, res) => {
    const { startCity, endCity, mpg } = req.query;
    // const startCity = 'corona';
    // const endCity = 'anaheim';
    // const mpg = 20;

    getPrice(startCity, endCity, mpg)
      .then((price) => {
        res.status(200).send(price);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getScenarios: (req, res) => {
    res.status(200).send(dummyData);
  },
};

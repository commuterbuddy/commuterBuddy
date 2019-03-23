const getPrice = require('./apis/price');
const dummyData = require('./dummyData.js');

module.exports = {
  getPrices: (req, res) => {
    const { startCity, endCity, mpg } = req.query;

    getPrice(startCity, endCity, mpg)
      .then((price) => {
        res.status(200).send(price);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  getScenarios: (req, res) => {
    res.status(200).send(dummyData)
  },

  postScenarios: (req, res) => {
    const scenarioObject = req.body;
    console.log('scen obj', scenarioObject);
    res.status(201).send('good post');
  },

  getAllScenarios: (req, res) => {
    res.status(200).send('good get');
  },
};

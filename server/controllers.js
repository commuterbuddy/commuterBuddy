const bcrypt = require('bcrypt');
const getPrice = require('./apis/price');
const dummyData = require('./dummyData.js');
const { User, Scenario } = require('../database/models');
const saltRounds = 10;

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
    const newScen = new Scenario(scenarioObject);
    newScen.save()
      .then((data) => {
        console.log(data);
        res.status(201).send('good post');
      })
      .catch((err) => {
        console.log(err);
        res.status(403).send(err);
      });
  },

  getAllScenarios: (req, res) => {
    const { username: userName } = req.query;
    Scenario.find({ userName })
      .then((data) => {
        console.log(data);
        res.status(200).send(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(403).send(err);
      });
  },

  postSignup: (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    bcrypt.hash(password, saltRounds, (err, hash) => {
      const newUser = new User({ username, password: hash });
      if (err) {
        console.log(err);
      }
      newUser.save()
        .then((data) => {
          if (data) {
            res.status(201).send(username);
          }
        })
        .catch((err) => {
          res.send('Name not available');
        })
    });
  },

  postLogin: (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    User.findOne({ username })
      .then((user) => {
        if (!user) {
          res.send('Username doesn\'t exist');
        } else {
          bcrypt.compare(password, user.password, (err, result) => {
            if (result === true) {
              res.send(username);
            } else {
              res.send('Incorrect password');
            }
          });
        }
      });
  }
};

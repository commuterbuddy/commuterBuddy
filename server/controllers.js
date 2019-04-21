const bcrypt = require('bcrypt');
const getPrice = require('./apis/price');
const dummyData = require('./dummyData.js');
const countyData = require('./countyData.js');
const { User, Scenario } = require('../database/models');

const validateSignup = require('./validator/signup.js');
const validateLogin = require('./validator/login.js');
const saltRounds = 10;

module.exports = {
  getCounties: (req, res) => {
    res.status(200).send(countyData);
  },


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

  postScenarios: (req, res) => {
    const scenarioObject = req.body;
    const newScen = new Scenario(scenarioObject);
    newScen.save()
      .then((data) => {
        res.status(201).send('good post');
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },

  getAllScenarios: (req, res) => {
    const { email } = req.query;
    Scenario.find({ email })
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(403).send(err);
      });
  },

  postSignup: (req, res) => {
    const { email, username, password } = req.body;
    const { errors, isValid } = validateSignup(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    User
      .findOne({ email })
      .then((user) => {
        if (user) {
          return res.status(400).json({ email: 'Email already exists' });
        }
      });

    bcrypt.hash(password, saltRounds, (err, hash) => {
      const newUser = new User({ email, username, password: hash });
      newUser.save()
        .then((data) => {
          if (data) {
            res.status(201).json(email);
          }
        })
        .catch((err) => console.log(err));
    });
  },

  postLogin: (req, res) => {
    const { email, password } = req.body;
    const { errors, isValid } = validateLogin(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    User
      .findOne({ email })
      .then((user) => {
        if (!user) {
          res.status(400).json({ email: 'Email not found' });
        } else {
          bcrypt
            .compare(password, user.password)
            .then((isMatch) => {
              if (isMatch) {
                res.status(201).json({ email, username: user.username });
              } else {
                res.status(400).json({ password: 'Password incorrect' })
              }
            })
            .catch(err => console.log(err))
        }
      });
  }
};

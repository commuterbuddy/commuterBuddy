const router = require('express').Router();
const bcrypt = require('bcrypt');
const controllers = require('./controllers.js');
const pool = require('../database');
const saltRounds = 10;

/*
  Apis to keep in mind
    authentication:
      -get - verify that user exists
        -params: { username, password }
        -response:  statusCode: 200 //good
                    statusCode: 403 //bad
      -post - create a new user
        -params: { username, password }
        -response:  statusCode: 201 //good
                    statusCode: 403 //bad
    scenarios:
      -get - get all the saved scenarios for that user
        -params: { username }
        -response:  statusCode: 200, an array of objects with
                    the scenarios they saved in the db //good
                    statusCode: 404 //bad, no saved scenarios
      -post - save the current scenario in the db
        -params: { username, prices, startCity, endCity, scenarioName }
        -response:  statusCode: 201 //good
                    statusCode: 403 //bad
    prices:
      -get - get all the prices from the rideshare apis
        -params: { startCity, endCity, mpg }
        -response:  statusCode 200
                    body = { startCoord, endCoord, prices } //good
                    statusCode 404 //bad city doesnt exist
*/

router
  .route('/prices')
  .get(controllers.getPrices);

router
  .route('/scenarios')
  .get(controllers.getScenarios);

router
  .post('/signup', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    bcrypt.hash(password, saltRounds, (err, hash) => {
      pool.query(`INSERT INTO users (username, password) VALUES ('${username}', '${hash}')`)
        .then((data) => {
          if (data) {
            res.status(201).send(username);
          }
        })
        .catch((err) => {
          res.send('Name not available');
        })
    });
  });

router
  .post('/login', (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    pool.query(`SELECT * FROM users WHERE username='${username}'`)
      .then((user) => {
        if (!user.rows[0]) {
          res.send('Username doesn\'t exist');
        } else {
          bcrypt.compare(password, user.rows[0].password, (err, result) => {
            if (result === true) {
              res.send(username);
            } else {
              res.send('Incorrect password');
            }
          });
        }
      });
  })
module.exports = router;

const router = require('express').Router();
const controllers = require('./controllers.js');

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
  .route('/counties')
  .get(controllers.getCounties);

router
  .route('/prices')
  .get(controllers.getPrices);

router
  .route('/scenarios')
  .get(controllers.getScenarios);

router
  .route('/scenariosDev')
  .post(controllers.postScenarios)
  .get(controllers.getAllScenarios);

router
  .route('/signup')
  .post(controllers.postSignup);

router
  .route('/login')
  .post(controllers.postLogin)

module.exports = router;

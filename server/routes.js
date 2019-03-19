const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/lyft').get(controllers.lyft.get)
  .route('/gasFeed').get(controllers.gasFeed.get);

module.exports = router; 
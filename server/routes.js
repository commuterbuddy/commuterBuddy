const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/lyft')
  .get(controllers.lyft.get);

router
  .route('/uber')
  .get(controllers.uber.get);

module.exports = router;

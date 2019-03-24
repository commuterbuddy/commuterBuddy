const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const scenarioSchema = new mongoose.Schema({
  userName: String,
  tripName: String,
  startCity: String,
  endCity: String,
  birdPrice: String,
  lyftRides: [{ name: String, price: String }],
  uberRides: [{ name: String, price: String }],
  dailyGasCost: String,
  costPerGallon: Number,
});

const User = new mongoose.model('User', userSchema);
const Scenario = new mongoose.model('Scenario', scenarioSchema);

module.exports = {
  User,
  Scenario,
};

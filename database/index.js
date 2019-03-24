const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });

module.exports = db;

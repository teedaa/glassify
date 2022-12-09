const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODV_URI || 'mongodb://localhost/glassify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;
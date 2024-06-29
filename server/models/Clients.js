const mongoose = require('mongoose');

const ClientSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unque: true,
  },
  password: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model('Client', ClientSchema);

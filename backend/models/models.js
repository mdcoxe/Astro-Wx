const { Schema, model } = require('mongoose');

const astroWxSchema = Schema({
  zip: { type: Number, required: true }
});

module.exports = model('AstroWx', astroWxSchema);
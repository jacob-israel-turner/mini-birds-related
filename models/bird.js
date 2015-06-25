var mongoose = require('mongoose');

var birdSchema = new mongoose.Schema({
  name: { type: String, required: true },
  order: { type: String, required: true },
  status: { type: String, required: true, enum: [
      'extinct',
      'extinct in the wild',
      'critically endangered',
      'endangered',
      'vulnerable',
      'near threatened',
      'conservation dependent',
      'least concern'
  ]}
});



module.exports = birdSchema;

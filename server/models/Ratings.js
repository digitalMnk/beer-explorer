const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingsSchema = new Schema({
  stars: {
    type: Number,
    required: true,
    default: 0
  },
  beerId: {
    type: String
  }
});

module.exports = mongoose.model('Ratings', ratingsSchema);

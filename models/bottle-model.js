const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bottleSchema = new mongoose.Schema({
      image: {
        type: String,
      },

      name: {
        type: String,
      },

      price: {
        type: Number,
      },

      category: {
        type: String,
      },

      size: {
        type: String,
      }
});



const bottleModel = mongoose.model('Bottle', bottleSchema);


module.exports = bottleModel;

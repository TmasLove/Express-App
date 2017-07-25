const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new mongoose.Schema({
      name: {
        type: String,
      },

      price: {
        type: Number,
      },

      quantity: {
        type: Number,
      },

      country: {
        type: String
      }
});



const beerModel = mongoose.model('Beer', beerSchema);


module.exports = beerModel;

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const beerSchema = new mongoose.Schema({
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
        type: String
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

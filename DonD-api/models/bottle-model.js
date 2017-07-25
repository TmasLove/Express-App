const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bottleSchema = new mongoose.Schema({
      name: {
        type: String,
      },

      price: {
        type: Number,
      },

      size: {
        type: String,
      }
});



const bottleModel = mongoose.model('Bottle', bottleSchema);


module.exports = bottleModel;

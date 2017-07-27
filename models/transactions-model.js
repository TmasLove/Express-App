const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myTransactionSchema = new Schema(
  {
    userId: {
      type: String,
      require: true
    },
    fullName: {
      type: String,
      require: true
    },
    address: {
      type: String
    },
    price: {
      type: Number,
      require: true
    }
  },
  {
    timestamps: true
  }
);



const TransactionsModel = mongoose.model('Transaction', myTransactionSchema);


module.exports = TransactionsModel;

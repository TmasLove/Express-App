const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const myUserSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true
    },
     email: {
       type: String,
       require: true
     },
     address: {
       type: String,
       required: true
     },
     username: {
       type: String,
       required: true
     },
     encryptedPassword: {
       type: String,
       required: true
     }
   },
    {
      timestamps: true
    }

  );

const UserModel = mongoose.model('User', myUserSchema);

module.exports = UserModel;

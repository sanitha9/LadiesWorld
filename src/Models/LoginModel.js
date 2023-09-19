const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema definition

const LoginSchema = new Schema({
  username: String,
  password: String,
  role: Number,
});

var LoginModel = mongoose.model('login_tb', LoginSchema); //model creation
module.exports = LoginModel;

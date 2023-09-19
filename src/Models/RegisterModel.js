const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema definition

const RegisterSchema = new Schema({
  login_id: { type: Schema.Types.ObjectId, ref: 'login_tb', required: true },
  name: { type: String, required: true },
  // address: { type: String, required: true },
  phone: { type: Number, required: true },
  dob:{type:String,required:true},
  address:{type:String,required:true},
  location:{type:String,required:true},
  gender:{type:String,required:true},

});

var RegisterModel = mongoose.model('register_tb', RegisterSchema); //model creation
module.exports = RegisterModel;

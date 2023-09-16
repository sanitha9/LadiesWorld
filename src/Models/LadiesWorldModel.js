const mongoose =require('mongoose');


const LadiesWorldModelSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
      },
      dob: {
        type: String,
        require: true,
      },
      image: {
        type: String,
        require: true,
      },
      address: {
        type: String,
        require: true,
      },
      mobile: {
        type: String,
        require: true,
      }
});
module.exports = mongoose.model('userdetails', LadiesWorldModelSchema);
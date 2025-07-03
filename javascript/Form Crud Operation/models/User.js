const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  color: String,
  hobbies: [String],
  gender: String,
  birthday: Date
});

module.exports = mongoose.model('User', userSchema);

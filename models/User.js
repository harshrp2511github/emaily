const mongoose = require('mongoose');
//const Schema = mongoose.Schema; or
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String
});

mongoose.model('users', userSchema);

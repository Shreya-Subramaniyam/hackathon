const mongoose = require('mongoose');

const authschema = new mongoose.Schema({
  name: string,
  email: string,
  password: string,
  cpassword: string
});

module.exports = mongoose.model('AUTH', authschema);

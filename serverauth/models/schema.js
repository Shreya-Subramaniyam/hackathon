const mongoose = require('mongoose');
// const { schm } = require('mongoose');

const authschema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true
  },
  password: {
    type: String,
    required: true
  },
  cpassword: {
    type: String,
    required: true
  }
});

AUTHschema = mongoose.model('AUTH', authschema);

// module.exports = mongoose.model('AUTH', authschema);

const routeschema = new mongoose.Schema({
  route: {
    type: String,
    required: true
  }
});

// module.exports = mongoose.model('Route', routeschema);
ROUTEschema = mongoose.model('Route', routeschema);

module.exports = { Auth: AUTHschema, Routes: ROUTEschema};

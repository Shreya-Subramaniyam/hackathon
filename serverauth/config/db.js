const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGOuri');

const connectdb = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });

    console.log('database connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectdb;

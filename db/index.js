require('dotenv').config()
const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGO_URI)

    .then(() => {
        console.log('connected to db');
      })
      .catch((err) => {
        console.log(err.message);
      });

const db = mongoose.connection

module.exports = db
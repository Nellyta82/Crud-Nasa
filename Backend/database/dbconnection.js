const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
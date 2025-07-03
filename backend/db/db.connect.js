const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URI = process.env.MONGODB;

const initializeDB = async () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to MongoDB database succeessfully.");
    })
    .catch((err) => {
      console.log("Error while connecting to database", err);
    });
};

module.exports = {initializeDB}
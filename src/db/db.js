const mongoose = require("mongoose");

require("dotenv").config();

async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("DB connection Successfull");
  } catch (error) {
    console.error("Error:", error);
    console.log("Failed to connect to Database");
    process.exit(1);
  }
}

module.exports = connectDb;
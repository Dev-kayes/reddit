const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database is Connected");
  } catch (error) {
    console.error("MongoDB connection failed", error.message);
    process.exit(1);
  }
};
module.exports = dbConnect;

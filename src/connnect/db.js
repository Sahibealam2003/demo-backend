const mongoose = require("mongoose");

let isConnected = false;

const connect = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    isConnected = db.connections[0].readyState === 1;
    console.log("Database connected");
  } catch (error) {
    console.error("DB connection error:", error.message);
  }
};

module.exports = connect;

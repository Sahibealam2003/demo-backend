const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL,{
      useNewUrlParser : true,
      useUnifiedTopology : true
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); 
  }
};


module.exports = connect;

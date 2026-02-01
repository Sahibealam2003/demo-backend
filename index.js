const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connect = require("./src/connnect/db");
const userRoutes = require("./src/routers/useRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// connect DB on every request (safe in serverless)
app.use(async (req, res, next) => {
  await connect();
  next();
});

app.use("/api", userRoutes);

module.exports = app;

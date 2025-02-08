const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config");
const orderRoutes = require("./routes/order.routes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/orders", orderRoutes);

mongoose
  .connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = app;

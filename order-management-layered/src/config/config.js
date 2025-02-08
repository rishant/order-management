const dotenv = require("dotenv");
const path = require("path");

const env = process.env.NODE_ENV || "development";
dotenv.config({ path: path.resolve(__dirname, `../../.env.${env}`) });

const config = {
  port: process.env.PORT || 3000,
  mongoUri: process.env.MONGO_URI || "mongodb://localhost:27017/orders",
};

module.exports = config;

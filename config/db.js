const mongoose = require("mongoose");

const DB_URL =
  "mongodb+srv://admin:admin@mycluster.xntmcj2.mongodb.net/menthy-group";
const db = mongoose.connect(DB_URL);

module.exports = db;

const mongoose = require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/group-project");

module.exports = db;

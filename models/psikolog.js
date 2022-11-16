const mongoose = require("mongoose");
const { Schema } = mongoose;

const psikologSchema = new Schema({
  nama: String,
  pengalaman: String,
});

const Psikolog = mongoose.model("Psikolog", psikologSchema);

module.exports = Psikolog;

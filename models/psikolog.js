const mongoose = require("mongoose");
const { Schema } = mongoose;

const psikologSchema = new Schema({
  nama: {
    required: true,
    type: String
  },
  pengalaman: {
    required: true,
    type: String
  },
});

const Psikolog = mongoose.model("Psikolog", psikologSchema);

module.exports = Psikolog;

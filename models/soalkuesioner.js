const mongoose = require("mongoose");
const { Schema } = mongoose;

const SoalKuesionerSchema = new Schema({
  pertanyaan: {
    type: String,
    required: true,
  },
});

const SoalKuesioner = mongoose.model("SoalKuesioner", SoalKuesionerSchema);

module.exports = SoalKuesioner;

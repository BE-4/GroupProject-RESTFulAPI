const mongoose = require("mongoose");
const SoalKuesioner = require("./soalkuesioner");
const User = require("./user");
const { Schema } = mongoose;

const HasilKuesionerSchema = new Schema({
  id_user: {
    type: String,
    required: true,
    references: [{ type: Schema.Types.ObjectId, ref: User }],
  },
  hasil: [
    {
      id_soal: {
        type: String,
        required: true,
        references: [{ type: Schema.Types.ObjectId, ref: SoalKuesioner }],
      },
      jawaban: {
        type: String,
        enum: ["Tidak pernah", "Jarang", "Kadang-kadang", "Sering"],
      },
      bobot: {
        type: Number,
        enum: [1, 2, 3, 4],
      },
    },
  ],
});

const HasilKuesioner = mongoose.model("HasilKuesioner", HasilKuesionerSchema);

module.exports = HasilKuesioner;

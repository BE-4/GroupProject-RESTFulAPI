const SoalKuesioner = require("../models/soalkuesioner");
const HasilKuesioner = require("../models/hasilkuesioner");
const jwt = require("jsonwebtoken");

module.exports = {
  addKuesioner: (req, res) => {
    const data = req.body;
    const kuesioner = new SoalKuesioner(data);

    kuesioner.save();

    res.status(200).json({
      message: "Kuesioner berhasil ditambahkan",
    });
  },
  getKuesioner: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      const kuesioner = await SoalKuesioner.find({}, "-__v");
      res.status(200).json({
        message: "Berhasil mendapat data pertanyaan",
        data: kuesioner,
      });
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
  },
  jawabKuesioner: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      const data = req.body;
      const kuesioner = new HasilKuesioner(data);

      kuesioner.save();

      res.status(200).json({
        message: "Selesai menjawab pertanyaan",
      });
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
  },
  getHasilKuesioner: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      const kuesioner = await HasilKuesioner.find({ id_user: user.id }, "-__v");
      res.status(200).json({
        message: "Berhasil mendapatkan hasil kuesioner",
        data: kuesioner,
      });
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
  },
};

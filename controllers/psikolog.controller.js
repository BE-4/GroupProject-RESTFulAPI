const Psikolog = require("../models/psikolog");

module.exports = {
  getAllPsikolog: async (req, res) => {
    try {
      const psikolog = await Psikolog.find({}, "-password -__v");

      res.status(200).json({
        message: "success get data psikolog",
        data: psikolog,
      });
    } catch (error) {
      console.log(error);
    }
  },

  addPsikolog: (req, res) => {
    const data = req.body;
    const psikolog = new Psikolog(data);

    psikolog.save();

    res.status(200).json({
      message: "Psikolog baru berhasil ditambahkan !",
    });
  },

  updatePsikolog: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const psikolog = await Psikolog.findByIdAndUpdate(id, data);

    await psikolog.save();

    res.status(200).json({
      message: "Data berhasil di Update !",
    });

    psikolog.save();
  },

  deletePsikolog: async (req, res) => {
    const { id } = req.params;
    const psikolog = await Psikolog.findById(id);

    await psikolog.remove();
    res.json({
      message: "Data yang dipilih berhasil dihapus !",
      data: "terhapus",
    });
  }
};

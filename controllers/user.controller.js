const { json } = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      if (user.role == "admin") {
        const users = await User.find({}, "-__v -password");
        res.status(200).json({
          message: "Data user",
          data: users,
        });
      } else {
        res.status(400).json({
          message: "Anda bukan admin",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
  },

  profile: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      const users = await User.find({ _id: user.id }, "-__v -password");
      res.status(200).json({
        message: "Data user",
        data: users,
      });
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      await User.findOneAndDelete({ _id: user.id });
      res.status(200).json({
        message: "User berhasil dihapus",
      });
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login terlebih dahulu",
      });
    }
  },

  admin: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      if (user.role == "admin") {
        res.status(200).json({
          message: "Ini halaman admin",
        });
      } else {
        res.status(500).json({
          message: "Anda bukan admin",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Silahkan login sebagai admin",
      });
    }
  },

  updateByID : async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const user = await User.findByIdAndUpdate(id, data);

    await user.save();

    res.status(200).json({
      message: "Data berhasil di Update !",
    });

    user.save();
  },

  deleteByID : async (req, res) => {
    const { id } = req.params;
  
    const user = await User.findById(id);

    await user.remove();
    res.json({
      message: "Data yang dipilih berhasil dihapus !",
      data: "terhapus",
    });
  }
};

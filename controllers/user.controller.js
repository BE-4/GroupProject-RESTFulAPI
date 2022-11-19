const { json } = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const auth = req.headers.authorization;
      const token = auth.split(" ")[1];
      const user = jwt.verify(token, process.env.API_SECRET);
      if (user.role == "admin") {
        const users = await User.find({}, "-__v -password");
        res.status(200).json({
          message: "success get data user",
          data: users,
        });
      } else {
        res.status(400).json({
          message: "Anda bukan admin",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: err,
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
        message: err,
      });
    }
  },

};

const { json } = require("express");
const User = require("../models/user");

module.exports = {
  getAllUser: (req, res) => {
    res.json({
      message: "test",
    });
  },

  getUser: (req, res) => {},

  updateUser: (req, res) => {},

  deleteUser: (req, res) => {},
};

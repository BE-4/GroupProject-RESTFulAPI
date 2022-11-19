const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");

module.exports = {
  register: (req, res) => {
    const user = new User({
      nama: req.body.nama,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
    });

    user.save((err) => {
      if (err) {
        res.status(500).send({
          message: err,
        });
        return;
      } else {
        res.status(200).send({
          message: "User berhasil register",
        });
      }
    });
  },

  login: async (req, res) => {
    const user = await User.findOne({
      email: req.body.email,
    }).exec((err, user) => {
      if (err) {
        res.status(500).json({
          message: err,
        });
        return;
      }
      if (!user) {
        return res.status(404).json({
          message: "User tidak ditemukan",
        });
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.json({
          accessToken: null,
          message: "Password salah",
        });
      }
      const token = jwt.sign(
        {
          id: user.id,
          nama: user.nama,
          email: user.email,
          role: user.role,
        },
        process.env.API_SECRET,
        {
          expiresIn: "1200s",
        }
      );
      res.status(200).json({
        user: {
          id: user._id,
          email: user.email,
          nama: user.nama,
          role: user.role,
        },
        message: "Login berhasil",
        accessToken: token,
      });
    });
  },
};

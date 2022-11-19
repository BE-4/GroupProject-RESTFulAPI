const express = require("express");
const router = express.Router();

const {
  getAllUser,
  profile,
  deleteUser,
  admin,
} = require("../controllers/user.controller");

router.get("/allUser", getAllUser);
router.get("/profile", profile);
router.delete("/deleteUser", deleteUser);
router.get("/admin", admin);

module.exports = router;

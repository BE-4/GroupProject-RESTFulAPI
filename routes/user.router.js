const express = require("express");
const router = express.Router();

const {
  getAllUser,
  profile,
  deleteUser,
  admin,
  updateByID,
  deleteByID
} = require("../controllers/user.controller");

router.get("/allUser", getAllUser);
router.get("/profile", profile);
router.delete("/deleteUser", deleteUser);
router.get("/admin", admin);
router.patch("/:id", updateByID);
router.delete("/:id", deleteByID);

module.exports = router;

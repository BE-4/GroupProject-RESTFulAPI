const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

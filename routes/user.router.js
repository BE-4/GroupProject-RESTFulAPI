const express = require("express");
const router = express.Router();

const { getAllUser, admin } = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/admin", admin);

module.exports = router;

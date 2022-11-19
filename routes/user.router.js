const express = require("express");
const router = express.Router();

const { getAllUser, admin } = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/admin", admin);

router.get("/", getAllUser);
router.get("/:id", getUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

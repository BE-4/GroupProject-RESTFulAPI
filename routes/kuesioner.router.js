const express = require("express");
const router = express.Router();

const {
  addKuesioner,
  getKuesioner,
  jawabKuesioner,
  getHasilKuesioner,
} = require("../controllers/kuesioner.controller");

router.post("/add", addKuesioner);
router.get("/", getKuesioner);
router.post("/", jawabKuesioner);
router.get("/hasil", getHasilKuesioner);

module.exports = router;

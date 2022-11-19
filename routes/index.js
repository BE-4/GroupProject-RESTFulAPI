const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router");
const userRouter = require("./user.router");
const kuesionerRouter = require("./kuesioner.router");

router.use("/user", userRouter);
router.use("/auth", authRouter);
router.use("/kuesioner", kuesionerRouter);

module.exports = router;

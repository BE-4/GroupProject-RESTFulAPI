const express = require("express");
const router = express.Router();

const authRouter = require("./auth.router");
const userRouter = require("./user.router");

router.use("/user", userRouter);
router.use("/auth", authRouter);

const userRouter = require("./user.router");

router.use("/user", userRouter);

module.exports = router;

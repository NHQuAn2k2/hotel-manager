const express = require("express");
const userService = require("./userService");
const userRepository = require("./userRepository");
const userRouter = express.Router();
userRouter.get("/test", (req, res) => {
  return res.status(200).json({ message: "api is active" });
});
module.exports = userRouter;

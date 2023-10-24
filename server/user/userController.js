const express = require("express");
const userService = require("./userService");
const userRouter = express.Router();
userRouter.post("/register", (req, res) => {
  userService.register(req.body);
  return res.json({ token: "this is token for you" });
});
userRouter.post("/login", (req, res) => {
  userService.login();
});
module.exports = userRouter;

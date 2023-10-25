const express = require("express");
const userService = require("./userService");
const userRouter = express.Router();
userRouter.post("/register", (req, res) => {
  userService.register(req.body, (result, token) => {
    if (result) {
      return res.json({ token }).status(200);
    } else {
      return res.json({ message: "username available" }).status(400);
    }
  });
});
userRouter.post("/login", (req, res) => {
  userService.login(req.body, (result, token) => {
    if (result) {
      return res.json({ token }).status(200);
    } else {
      return res.json({ message: "username does not exist" }).status(400);
    }
  });
});
module.exports = userRouter;

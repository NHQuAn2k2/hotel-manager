const express = require("express");
const authRouter = express.Router();
const authService = require("./authService");
authRouter.post("/register", (req, res) => {
  // dang ky
  authService.register(req.body, (result, token) => {
    if (result) return res.json({ token }).status(200);
    return res.json({ message: "username available" }).status(400);
  });
});
authRouter.post("/login", (req, res) => {
  // dang nhap
  authService.login(req.body, (result, token) => {
    if (result) return res.status(200).json({ token });
    return res.status(400).json({ message: "username does not exist" });
  });
});
module.exports = authRouter;

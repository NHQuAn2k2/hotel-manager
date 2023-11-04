const express = require("express");
const authRouter = express.Router();
const authService = require("./authService");
authRouter.post("/register", (req, res) => {
  // dang ky
  authService.register(req.body, (result, data) => {
    if (result) return res.status(200).json({ token: data });
    return res.status(400).json({ message: data });
  });
});
authRouter.post("/login", (req, res) => {
  // dang nhap
  authService.login(req.body, (result, data) => {
    if (result) return res.status(200).json({ token: data });
    return res.status(400).json({ message: data });
  });
});
module.exports = authRouter;

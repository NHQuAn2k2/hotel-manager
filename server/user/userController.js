const express = require("express");
const userService = require("./userService");
const jwtFilter = require("../jwt/jwtFilter");
const userRouter = express.Router();
userRouter.post("/register", (req, res) => {
  // dang ky
  userService.register(req.body, (result, token) => {
    if (result) {
      return res.json({ token }).status(200);
    } else {
      return res.json({ message: "username available" }).status(400);
    }
  });
});
userRouter.post("/login", (req, res) => {
  // dang nhap
  userService.login(req.body, (result, token) => {
    if (result) {
      return res.status(200).json({ token });
    } else {
      return res.status(400).json({ message: "username does not exist" });
    }
  });
});
userRouter.post("/change-password", jwtFilter, (req, res) => {
  // doi mat khau
  res.status(200).json({ message: "change password success" });
});
userRouter.delete("/", jwtFilter, (req, res) => {
  // xoa tai khoan
  res.status(200).json({ message: "delete user success" });
});
userRouter.put("/", jwtFilter, (req, res) => {
  // chinh sua thong tin ca nhan
  res.status(200).json({ message: "update infor success" });
});
userRouter.post("/currency-change", jwtFilter, (req, res) => {
  // thay doi tien te
  res.status(200).json({ message: "currency change success" });
});
userRouter.post("/change-language", jwtFilter, (req, res) => {
  // thay doi ngon ngu
  res.status(200).json({ message: "change language success" });
});
userRouter.post("/save-hotel", jwtFilter, (req, res) => {
  // luu khach san yeu thich
  res.status(200).json({ message: "save hotel success" });
});
module.exports = userRouter;

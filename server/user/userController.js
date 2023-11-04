const express = require("express");
const userService = require("./userService");
const userRepository = require("./userRepository");
const userRouter = express.Router();
userRouter.get("/test", (req, res) => {
  return res.status(200).json({ message: "router user is active" });
});
userRouter.get("/", (req, res) => {
  // tim kiem
});
userRouter.post("/", (req, res) => {
  // dat phong
});
userRouter.post("/", (req, res) => {
  // huy phong
});
userRouter.post("/", (req, res) => {
  // dgia va bluan
});
userRouter.get("/:id", (req, res) => {
  // hien thi thong tin cn
  userService.viewInfor(req.params.id, (result) => {
    if (result) return res.status(200).json(result);
    return res.status(404).json();
  });
});
userRouter.put("/:id", (req, res) => {
  // chinh sua thong tin cn
  userService.editInfor({ id: req.params.id, ...req.body }, (result) => {
    if (result) return res.status(200).json();
    return res.status(400).json();
  });
});
userRouter.get("/", (req, res) => {
  // hien thi thong tin dat phong
});
userRouter.put("/", (req, res) => {
  // chinh sua thong tin dat phong
});
module.exports = userRouter;

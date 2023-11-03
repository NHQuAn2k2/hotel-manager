const express = require("express");
const managerRouter = express.Router();
managerRouter.get("/test", (req, res) => {
  return res.status(200).json({ message: "manager router is active" });
});
managerRouter.post("/", (req, res) => {
  // them khach san
});
managerRouter.post("/", (req, res) => {
  // them phong khach san
});
managerRouter.put("/", (req, res) => {
  // chinh sua khach san
});
managerRouter.put("/", (req, res) => {
  // chinh sua phong khach san
});
managerRouter.delete("/", (req, res) => {
  // xoa khach san
});
managerRouter.delete("/", (req, res) => {
  // xoa phong khach san
});
managerRouter.post("/", (req, res) => {
  // hien thi so luong phong co san
});
managerRouter.post("/", (req, res) => {
  // lich dat phong cua nguoi dung
});
module.exports = managerRouter;

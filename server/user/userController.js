const express = require("express");
const userService = require("./userService");
const userRepository = require("./userRepository");
const userRouter = express.Router();
userRouter.get("/test", (req, res) => {
  return res.status(200).json({ message: "router user is active" });
});
userRouter.get("/search", (req, res) => {
  // tim kiem
  userService.search(req.query.name, (result, data) => {
    if (result) {
      return res.status(200).json(data);
    } else {
      return res.status(200).json({ message: `${req.query.name} not found` });
    }
  });
});
userRouter.post("/rooms/booking", (req, res) => {
  // dat phong
  userService.booking(req.body, (result) => {
    if (!result) return res.status(400).json();
    return res.status(200).json();
  });
});
userRouter.post("/rooms/cancel/:bookingId", (req, res) => {
  // huy phong
  userService.cancel(req.params.bookingId, (result) => {
    if (!result) return res.status(400).json();
    return res.status(200).json();
  });
});
userRouter.post("/comments", (req, res) => {
  // dgia va bluan
  userService.comments(req.body, (result) => {
    if (!result) return res.status(400).json();
    return res.status(200).json();
  });
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
userRouter.get("/list/rooms/:id", (req, res) => {
  // hien thi danh sach dat phong
  userService.viewInforRoom(req.params.id, (result, data) => {
    if (result) return res.status(200).json(data);
    return res.status(400).json();
  });
});
userRouter.put("/list/rooms", (req, res) => {
  // chinh sua danh sach dat phong
  res.status(200).json({ message: "edit success" });
});
module.exports = userRouter;

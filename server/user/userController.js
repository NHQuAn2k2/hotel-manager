const express = require("express");
const userService = require("./userService");
const userRouter = express.Router();
userRouter.post("/change-password/:id", (req, res) => {
  // doi mat khau
  userService.changePassword(req.params.id, req.body, (result) => {
    if (result) return res.status(200).json();
    return res.status(400).json();
  });
});
userRouter.delete("/:id", (req, res) => {
  // xoa tai khoan
  userService.deleteUser(req.params.id, (result) => {
    if (result) return res.status(200).json();
    return res.status(400).json();
  });
});
userRouter.put("/:id", (req, res) => {
  // chinh sua thong tin ca nhan
  userService.editInfor({ id: req.params.id, ...req.body }, (result) => {
    if (result)
      return res.status(200).json({ message: "update infor success" });
  });
});
userRouter.post("/currency-change", (req, res) => {
  // thay doi tien te
  res.status(200).json({ message: "currency change success" });
});
userRouter.post("/change-language", (req, res) => {
  // thay doi ngon ngu
  res.status(200).json({ message: "change language success" });
});
userRouter.post("/save-hotel", (req, res) => {
  // luu khach san yeu thich
  res.status(200).json({ message: "save hotel success" });
});
module.exports = userRouter;

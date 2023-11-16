const express = require("express");
const customerService = require("./customerService");
const customerRouter = express.Router();
customerRouter.get("/test", (req, res) => {
  customerService.searchHotel();
  return res.status(200).json({ message: "customer is active" });
});
customerRouter.get("/search", (req, res) => {
  return res.status(200).json("search success");
});
module.exports = customerRouter;

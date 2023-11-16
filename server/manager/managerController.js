const express = require("express");
const managerRouter = express.Router();
managerRouter.get("/test", (req, res) => {
  return res.status(200).json({ message: "manager router is active" });
});
module.exports = managerRouter;

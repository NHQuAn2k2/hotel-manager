const express = require("express");
const userService = require("./userService");
const user_router = express.Router();
user_router.get("/", (req, res) => {
  userService.hello();
  res.send("hello users");
});
module.exports = user_router;

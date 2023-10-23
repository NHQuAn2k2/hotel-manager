const express = require("express");
const cors = require("cors");
require("./mysqlConfig").connect("localhost", "root", "123456", "employees");
const userRepository = require("./user/userRepository");
const app = express();
const port = 8080;
app.use(cors());
app.get("/", (req, res) => {
  userRepository.findAll((data) => {
    res.json(data);
  });
});
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

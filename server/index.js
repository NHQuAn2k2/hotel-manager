const express = require("express");
const cors = require("cors");
require("./mysqlConfig").connect("localhost", "root", "123456", "employees");
const userRepository = require("./user/userRepository");
const user_router = require("./user/userController");
const app = express();
const port = 8080;
app.use(cors(), express.json());
app.use("/api/v1/user", user_router);
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

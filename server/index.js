const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 8080;
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello world");
});
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "employees",
});
db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Connected!");
});
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

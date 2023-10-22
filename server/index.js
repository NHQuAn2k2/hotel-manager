const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const port = 8080;
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "employees",
});
db.connect((error) => {
  if (error) {
    throw error;
  }
  console.log("Connected!");
});
app.get("/", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

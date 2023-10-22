const express = require("express");
const cors = require("cors");
require("./mysql").connect("localhost", "root", "123456", "employees");
const app = express();
const port = 8080;
app.use(cors());
app.get("/", (req, res) => {
  db.query("SELECT * FROM student", (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

const express = require("express");
const cors = require("cors");
require("./mysqlConfig").connect(
  "hotelmanager.cujea9dm1yck.ap-southeast-2.rds.amazonaws.com",
  "NguyenQuan",
  "K4HGEeMIFrsl5jQ1aYvv",
  "hotel_manager"
);
const apiRoutes = require("./routes/index");
const apiAuth = require("./auth/index");
const jwtFilter = require("./jwt/jwtFilter");
const app = express();
const port = 8080;
app.use(cors(), express.json());
app.use("/", apiAuth);
app.use("/", jwtFilter, apiRoutes);
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

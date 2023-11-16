const express = require("express");
const cors = require("cors");
require("./mysqlConfig").connect(
  "hotelmanager.cujea9dm1yck.ap-southeast-2.rds.amazonaws.com",
  "NguyenQuan",
  "K4HGEeMIFrsl5jQ1aYvv",
  "hotel_manager"
);
const customerRouter = require("./user/customerController");
const managerRouter = require("./manager/managerController");
const authRouter = require("./auth/authController");
const jwtFilter = require("./jwt/jwtFilter");
const app = express();
const port = 8080;
app.use(cors(), express.json());
app.use("/auth", authRouter);
app.use("/customer", customerRouter);
app.use("/manager", managerRouter);
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

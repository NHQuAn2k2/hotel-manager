const express = require("express");
const cors = require("cors");
require("./mysqlConfig").connect(
  "hotelmanager.cujea9dm1yck.ap-southeast-2.rds.amazonaws.com",
  "NguyenQuan",
  "K4HGEeMIFrsl5jQ1aYvv",
  "hotel_manager"
);
const userRouter = require("./user/userController");
const managerRouter = require("./manager/managerController");
const authRouter = require("./auth/authController");
const jwtFilter = require("./jwt/jwtFilter");
const app = express();
const port = 8080;
app.use(cors(), express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", jwtFilter, userRouter);
app.use("/api/v1/manager", jwtFilter, managerRouter);
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

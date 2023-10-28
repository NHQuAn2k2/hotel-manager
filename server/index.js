const express = require("express");
const cors = require("cors");
require("./mysqlConfig").connect(
  "hotelmanager.cujea9dm1yck.ap-southeast-2.rds.amazonaws.com",
  "NguyenQuan",
  "K4HGEeMIFrsl5jQ1aYvv",
  "hotel_manager"
);
const userRouter = require("./user/userController");
const hotelRouter = require("./hotel/hotelController");
const app = express();
const port = 8080;
app.use(cors(), express.json());
app.use("/api/v1/user", userRouter);
app.use("/api/v1/hotel", hotelRouter);
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

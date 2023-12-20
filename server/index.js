const express = require("express");
const path = require("path");
const cors = require("cors");
require("./mysqlConfig").connect(
  "hotelmanager.cujea9dm1yck.ap-southeast-2.rds.amazonaws.com",
  "NguyenQuan",
  "rds123456",
  "hotel_manager"
);
const apiRoutes = require("./routes/index");
const apiAuth = require("./auth/index");
const multer = require("multer");
const app = express();
const port = 8080;
// image handling----------------------------------------------------------
app.use("/images", express.static(path.join(__dirname, "images")));
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
app.use(multer({ storage: fileStorage, fileFilter }).single("image"));
//--------------------------------------------------------------------------
app.use(cors(), express.json());
app.use("/", apiAuth);
app.use("/", apiRoutes);
app.listen(port, () => {
  console.log(`server is running on localhost:${port}`);
});

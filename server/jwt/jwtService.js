const jwt = require("jsonwebtoken");
const jwtConstant = require("./jwtConstant");
module.exports = {
  generateToken: (payload) => {
    const token = jwt.sign(
      { ten: payload.ten, ma: payload.ma_nguoi_dung, vai_tro: payload.vai_tro },
      jwtConstant.secretKey,
      {
        expiresIn: "24h",
      }
    );
    return token;
  },
};

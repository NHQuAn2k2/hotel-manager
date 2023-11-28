const jwt = require("jsonwebtoken");
const jwtConstant = require("./jwtConstant");
module.exports = {
  generateToken: (payload) => {
    const token = jwt.sign({ ten: payload.ten }, jwtConstant.secretKey, {
      expiresIn: "24h",
    });
    return token;
  },
};

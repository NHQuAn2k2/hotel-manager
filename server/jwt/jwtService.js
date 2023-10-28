const jwt = require("jsonwebtoken");
const jwtConstant = require("./jwtConstant");
module.exports = {
  generateToken: (payload) => {
    const token = jwt.sign(
      { username: payload.username },
      jwtConstant.secretKey,
      {
        expiresIn: "24h",
      }
    );
    return token;
  },
};

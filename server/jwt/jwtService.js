const jwt = require("jsonwebtoken");
const secretKey = "jsonwebtoken";
module.exports = {
  generateToken: (payload) => {
    const token = jwt.sign({ username: payload[0].username }, secretKey, {
      expiresIn: "60s",
    });
    return token;
  },
};

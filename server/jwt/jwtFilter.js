const jwt = require("jsonwebtoken");
const jwtConstant = require("./jwtConstant");
module.exports = (req, res, next) => {
  const authorization = req.headers["authorization"];
  const token = authorization?.split(" ")[1];
  if (!token)
    return res
      .status(400)
      .json({ message: "you have not register or login yet" });
  jwt.verify(token, jwtConstant.secretKey, (err) => {
    if (!err) return next();
    return res.status(400).json({ message: "token is not valid" });
  });
};

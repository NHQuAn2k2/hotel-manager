const userRepository = require("./userRepository");
const User = require("./user");
const { generateToken } = require("../jwt/jwtService");
module.exports = {
  register: (user, callback) => {
    userRepository.findByName(user.username, (data) => {
      if (data.length > 0) {
        callback(false);
      } else {
        const data = new User(user.username, user.email, user.password);
        const token = generateToken([data]);
        userRepository.save(data);
        callback(true, token);
      }
    });
  },
  login: (user, callback) => {
    userRepository.findByName(user.username, (data) => {
      if (data.length <= 0) {
        callback(false);
      } else {
        const token = generateToken(data);
        callback(true, token);
      }
    });
  },
};

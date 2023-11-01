const { generateToken } = require("../jwt/jwtService");
const userRepository = require("../user/userRepository");
module.exports = {
  register: (user, callback) => {
    userRepository.findByName(user.username, (data) => {
      if (data) {
        callback(false);
      } else {
        const data = new User(user.username, user.email, user.password);
        const token = generateToken(data);
        userRepository.save(data);
        callback(true, token);
      }
    });
  },
  login: (user, callback) => {
    userRepository.findByName(user.username, (data) => {
      if (!data) {
        callback(false);
      } else {
        if (user.password !== data.password || user.email !== data.email) {
          callback(false);
        }
        const token = generateToken(data);
        callback(true, token);
      }
    });
  },
};

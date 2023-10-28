const userRepository = require("./userRepository");
const User = require("./user");
const { generateToken } = require("../jwt/jwtService");
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
        const token = generateToken(data);
        callback(true, token);
      }
    });
  },
  changePassword: (id, req, callback) => {
    userRepository.findById(id, (data) => {
      if (!data) {
        callback(false);
      } else {
        if (req.newPassword === req.confirmPassword) {
          userRepository.update("password", id, req.newPassword);
          callback(true);
        } else {
          callback(false);
        }
      }
    });
  },
  deleteUser: () => {},
  editInfor: () => {},
  currencyChange: () => {},
  changeLanguage: () => {},
  saveFavouriteHotel: () => {},
};

const userRepository = require("./userRepository");
const User = require("./user");
const { generateToken } = require("../jwt/jwtService");
module.exports = {
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
  deleteUser: (id, callback) => {
    userRepository.findById(id, (data) => {
      if (!data) {
        callback(false);
      } else {
        userRepository.removeById(id);
        callback(true);
      }
    });
  },
  editInfor: (user, callback) => {
    userRepository.findById(user.id, (data) => {
      if (data) {
        userRepository.update(data.id, user);
        callback(true);
      }
      callback(false);
    });
  },
  currencyChange: () => {},
  changeLanguage: () => {},
  saveFavouriteHotel: () => {},
};

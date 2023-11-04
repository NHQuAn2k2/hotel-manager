const { generateToken } = require("../jwt/jwtService");
const userRepository = require("../user/userRepository");
module.exports = {
  register: (user, callback) => {
    const checkUsername = () => {
      return new Promise((resolve, reject) => {
        userRepository.findByName(user.username, (data) => {
          if (data) {
            reject("username already exists");
          } else {
            resolve();
          }
        });
      });
    };
    const checkEmail = () => {
      return new Promise((resolve, reject) => {
        userRepository.findByEmail(user.email, (data) => {
          if (data) {
            reject("email already exists");
          } else {
            resolve();
          }
        });
      });
    };
    const saveUser = () => {
      const token = generateToken(user);
      userRepository.save(user);
      return token;
    };
    checkUsername()
      .then(checkEmail)
      .then(saveUser)
      .then((token) => {
        callback(true, token);
      })
      .catch((error) => {
        callback(false, error);
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

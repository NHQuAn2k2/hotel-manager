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
    const checkUsername = () => {
      return new Promise((resolve, reject) => {
        userRepository.findByName(user.username, (data) => {
          if (data) {
            resolve();
          } else {
            reject("username does not exist");
          }
        });
      });
    };
    const checkEmail = () => {
      return new Promise((resolve, reject) => {
        userRepository.findByEmail(user.email, (data) => {
          if (data) {
            resolve(data);
          } else {
            reject("email does not exist");
          }
        });
      });
    };
    const checkPassword = (data) => {
      return new Promise((resolve, reject) => {
        if (data.password !== user.password) {
          reject("incorrect password");
        } else {
          resolve(user);
        }
      });
    };
    checkUsername()
      .then(checkEmail)
      .then(checkPassword)
      .then((user) => {
        const token = generateToken(user);
        callback(true, token);
      })
      .catch((error) => {
        callback(false, error);
      });
  },
};

const userRepository = require("./userRepository");
module.exports = {
  search: () => {},
  booking: () => {},
  cancel: () => {},
  evaluate: () => {},
  viewInfor: (id, callback) => {
    userRepository.findById(id, (data) => {
      if (data) {
        callback(data);
      } else {
        callback(false);
      }
    });
  },
  editInfor: (user, callback) => {
    userRepository.findById(user.id, (data) => {
      if (data) {
        userRepository.update(user);
        callback(true);
      }
      callback(false);
    });
  },
  inforRoom: () => {},
  editInforRoom: () => {},
};

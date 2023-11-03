const userRepository = require("./userRepository");
module.exports = {
  search: () => {},
  booking: () => {},
  cancel: () => {},
  evaluate: () => {},
  infor: () => {},
  editInfor: (user, callback) => {
    userRepository.findById(user.id, (data) => {
      if (data) {
        userRepository.update(data.id, user);
        callback(true);
      }
      callback(false);
    });
  },
  inforRoom: () => {},
  editInforRoom: () => {},
};

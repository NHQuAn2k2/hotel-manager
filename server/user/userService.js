const userRepository = require("./userRepository");
module.exports = {
  search: () => {},
  comments: (data, callback) => {
    userRepository.insertComments(data);
    callback(true);
  },
  booking: (data, callback) => {
    userRepository.insertBooking(data);
    callback(true);
  },
  cancel: (data, callback) => {
    userRepository.deleteBooking(data);
    callback(true);
  },
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

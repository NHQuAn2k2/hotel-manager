const userRepository = require("./userRepository");
module.exports = {
  search: (data, callback) => {
    userRepository.searchHotel(data, (result) => {
      if (result.length > 0) {
        callback(true, result);
      } else {
        callback(false);
      }
    });
  },
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
  viewInforRoom: (id, callback) => {
    userRepository.viewRoom(id, (data) => {
      if (data.length > 0) {
        callback(true, data);
      } else {
        callback(false);
      }
    });
  },
  editInforRoom: () => {},
};

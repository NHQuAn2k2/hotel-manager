const userRepository = require("./userRepository");
const User = require("./user");
module.exports = {
  register: (user) => {
    const data = new User(user.id, user.username, user.email, user.password);
    userRepository.save(data);
  },
  login: () => {},
};

const db = require("../mysql").getDb();
module.exports = {
  findAll: (callback) => {
    db.query("SELECT * FROM student", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: (id) => {},
  remove: () => {},
  save: (user) => {},
};

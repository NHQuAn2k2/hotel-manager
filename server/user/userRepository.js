const db = require("../mysqlConfig").getDb();
module.exports = {
  findAll: (callback) => {
    db.query("SELECT * FROM student", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: (id, callback) => {
    const query = "SELECT * FROM student WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  remove: () => {},
  save: (user) => {},
};

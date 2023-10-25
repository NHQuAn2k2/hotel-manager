const db = require("../mysqlConfig").getDb();
module.exports = {
  findAll: (callback) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: (id, callback) => {
    const query = "SELECT * FROM user WHERE id = ?";
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findByName: (name, callback) => {
    const query = "SELECT * FROM user WHERE username = ?";
    const values = [name];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  remove: () => {},
  save: (user) => {
    const query =
      "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
    const values = [user.id, user.username, user.email, user.password];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
};

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
      callback(result[0]);
    });
  },
  findByName: (name, callback) => {
    const query = "SELECT * FROM user WHERE username = ?";
    const values = [name];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  save: (user) => {
    const query =
      "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";
    const values = [user.id, user.username, user.email, user.password];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (field, id, data) => {
    const query = `UPDATE user SET ${field} = ? WHERE id = ?`;
    const values = [data, id];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  remove: () => {},
};

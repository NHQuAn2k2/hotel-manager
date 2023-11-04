const db = require("../mysqlConfig").getDb();
module.exports = {
  findAll: (callback) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: (id, callback) => {
    const query =
      "SELECT * FROM user JOIN user_infor ON user.id = user_infor.user_id where user.id = ?";
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
  findByEmail: (email, callback) => {
    const query = "SELECT * FROM user WHERE email = ?";
    const values = [email];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  save: (user) => {
    const query =
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    const values = [user.username, user.email, user.password];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (user) => {
    const query =
      "UPDATE user JOIN user_infor ON user.id = user_infor.user_id SET username = ?, email = ?, sdt = ?, birthday = ?, nationality = ?, sex = ?, address = ? WHERE user.id = ?";
    const values = [
      user.username,
      user.email,
      user.sdt,
      user.birthday,
      user.nationality,
      user.sex,
      user.address,
      user.id,
    ];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  removeById: (id) => {
    const query = "DELETE FROM user WHERE id = ?";
    const values = [id];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
};

const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data, callback) => {
    const { ten, email, mat_khau, so_dien_thoai } = data;
    const query =
      "INSERT INTO nguoi_dung (ten, email, mat_khau, so_dien_thoai) VALUES (?, ?, ?, ?)";
    const values = [ten, email, mat_khau, so_dien_thoai];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  findByName: (data, callback) => {
    const { ten } = data;
    const query = "SELECT * FROM nguoi_dung WHERE ten = ?";
    const values = [ten];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findByEmail: (data, callback) => {
    const { email } = data;
    const query = "SELECT * FROM nguoi_dung WHERE email = ?";
    const values = [email];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
};

const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data) => {
    const { ten, email, ngay_sinh, so_dien_thoai, mat_khau } = data;
    const query =
      "INSERT INTO khach_hang (ten, email, ngay_sinh, so_dien_thoai, mat_khau) VALUES (?, ?, ?, ?, ?)";
    const values = [ten, email, ngay_sinh, so_dien_thoai, mat_khau];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  findByName: (data, callback) => {
    const { ten } = data;
    const query = "SELECT * FROM khach_hang WHERE ten = ?";
    const values = [ten];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findByEmail: (data, callback) => {
    const { email } = data;
    const query = "SELECT * FROM khach_hang WHERE email = ?";
    const values = [email];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
};

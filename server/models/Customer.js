const db = require("../mysqlConfig").getDb();
module.exports = {
  save: function (data, callback) {
    const { ten, email, mat_khau, so_dien_thoai } = data;
    const query =
      "INSERT INTO nguoi_dung (ten, email, mat_khau, so_dien_thoai) VALUES (?, ?, ?, ?)";
    const values = [ten, email, mat_khau, so_dien_thoai];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  findByName: function (data, callback) {
    const { ten } = data;
    const query = "SELECT * FROM nguoi_dung WHERE ten = ?";
    const values = [ten];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findByEmail: function (data, callback) {
    const { email } = data;
    const query = "SELECT * FROM nguoi_dung WHERE email = ?";
    const values = [email];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: function (data, callback) {
    const { ma_nguoi_dung } = data;
    const query = "SELECT * FROM nguoi_dung WHERE ma_nguoi_dung = ?";
    const values = [ma_nguoi_dung];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  updatePassword: function (data) {
    const { ma_nguoi_dung, mat_khau_moi } = data;
    this.findById({ ma_nguoi_dung }, (data) => {
      const query =
        "UPDATE nguoi_dung SET mat_khau = ?  WHERE ma_nguoi_dung = ?";
      const values = [mat_khau_moi, data[0].ma_nguoi_dung];
      db.query(query, values, (error) => {
        if (error) throw error;
      });
    });
  },
};

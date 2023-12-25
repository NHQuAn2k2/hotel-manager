const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data) => {
    const { ten_dich_vu, gia_dich_vu, ma_khach_san } = data;
    const query =
      "INSERT INTO dich_vu (ten_dich_vu, gia_dich_vu, ma_khach_san) VALUES (?, ?, ?)";
    const values = [ten_dich_vu, gia_dich_vu, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (data) => {
    const { ma_dich_vu, ten_dich_vu, gia_dich_vu, ma_khach_san } = data;
    const query =
      "UPDATE dich_vu SET ten_dich_vu = ?, gia_dich_vu = ? WHERE dich_vu.ma_dich_vu = ? AND dich_vu.ma_khach_san = ?";
    const values = [ten_dich_vu, gia_dich_vu, ma_dich_vu, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  delete: (data) => {
    const { ma_dich_vu, ma_khach_san } = data;
    const query =
      "DELETE FROM dich_vu WHERE dich_vu.ma_dich_vu = ? AND dich_vu.ma_khach_san = ?";
    const values = [ma_dich_vu, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  findOne: (data, callback) => {
    const { idService, idHotel } = data;
    const query =
      "SELECT ma_dich_vu, ten_dich_vu, gia_dich_vu FROM dich_vu WHERE ma_dich_vu = ? AND ma_khach_san = ?";
    const values = [idService, idHotel];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
};

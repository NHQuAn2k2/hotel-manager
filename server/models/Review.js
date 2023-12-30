const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data) => {
    const {
      diem_danh_gia,
      noi_dung_danh_gia,
      ngay_danh_gia,
      ma_nguoi_dung,
      ma_khach_san,
    } = data;
    const query =
      "INSERT INTO danh_gia (diem_danh_gia, noi_dung_danh_gia, ngay_danh_gia, ma_nguoi_dung, ma_khach_san) VALUES (?, ?, ?, ?, ?)";
    const values = [
      diem_danh_gia,
      noi_dung_danh_gia,
      ngay_danh_gia,
      ma_nguoi_dung,
      ma_khach_san,
    ];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
};

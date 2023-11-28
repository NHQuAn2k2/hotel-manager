const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data) => {
    const { so_phong, loai_phong, gia_phong, tinh_trang, ma_khach_san } = data;
    const query =
      "INSERT INTO phong (so_phong, loai_phong, gia_phong, tinh_trang, ma_khach_san) VALUES (?, ?, ?, ?, ?)";
    const values = [so_phong, loai_phong, gia_phong, tinh_trang, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (data) => {
    const {
      ma_phong,
      so_phong,
      loai_phong,
      gia_phong,
      tinh_trang,
      ma_khach_san,
    } = data;
    const query =
      "UPDATE phong SET so_phong = ?, loai_phong = ?, gia_phong = ?, tinh_trang = ? WHERE phong.ma_phong = ? AND phong.ma_khach_san = ?";
    const values = [
      so_phong,
      loai_phong,
      gia_phong,
      tinh_trang,
      ma_phong,
      ma_khach_san,
    ];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  delete: (data) => {
    const { ma_phong, ma_khach_san } = data;
    const query =
      "DELETE FROM phong WHERE phong.ma_phong = ? AND phong.ma_khach_san = ?";
    const values = [ma_phong, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
};

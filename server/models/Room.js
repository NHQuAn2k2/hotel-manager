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
  findOne: (data, callback) => {
    const { idRoom, idHotel } = data;
    const query =
      "SELECT ma_phong, so_phong, loai_phong, gia_phong, tinh_trang FROM phong WHERE ma_phong = ? AND ma_khach_san = ?";
    const values = [idRoom, idHotel];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  saveBooking: (data) => {
    const {
      ngay_dat,
      ngay_nhan,
      ngay_tra,
      so_luong_nguoi,
      so_luong_phong,
      thanh_tien,
      ma_khach_hang,
      room_ids = [],
    } = data;
    const query =
      "INSERT INTO don_dat_phong (ngay_dat, ngay_nhan, ngay_tra, so_luong_nguoi, so_luong_phong, thanh_tien, ma_khach_hang) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      ngay_dat,
      ngay_nhan,
      ngay_tra,
      so_luong_nguoi,
      so_luong_phong,
      thanh_tien,
      ma_khach_hang,
    ];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      const ma_dat_phong = result.insertId;
      room_ids.forEach((room_id) => {
        const query =
          "INSERT INTO chi_tiet_don_dat (ma_dat_phong, ma_phong) VALUES (?, ?)";
        const values = [ma_dat_phong, room_id];
        db.query(query, values, (err) => {
          if (err) throw err;
        });
      });
    });
  },
};

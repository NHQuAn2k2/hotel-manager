const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data) => {
    const { loai_phong, gia_phong, ma_khach_san } = data;
    const query =
      "INSERT INTO phong (loai_phong, gia_phong, ma_khach_san) VALUES (?, ?, ?)";
    const values = [loai_phong, gia_phong, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (data) => {
    const { so_phong, loai_phong, gia_phong, ma_khach_san } = data;
    const query =
      "UPDATE phong SET loai_phong = ?, gia_phong = ? WHERE phong.so_phong = ? AND phong.ma_khach_san = ?";
    const values = [loai_phong, gia_phong, so_phong, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  delete: (data) => {
    const { so_phong, ma_khach_san } = data;
    const query =
      "DELETE FROM phong WHERE phong.so_phong = ? AND phong.ma_khach_san = ?";
    const values = [so_phong, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  findOne: (data, callback) => {
    const { idRoom, idHotel } = data;
    const query =
      "SELECT so_phong, loai_phong, gia_phong FROM phong WHERE so_phong = ? AND ma_khach_san = ?";
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
      nguoi_lon,
      tre_em,
      so_luong_phong,
      thanh_tien,
      ma_khach_hang,
      rooms = [],
      services = [],
    } = data;
    const query =
      "INSERT INTO don_dat_phong (ngay_dat, ngay_nhan, ngay_tra, nguoi_lon, tre_em, so_luong_phong, thanh_tien, ma_khach_hang) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      ngay_dat,
      ngay_nhan,
      ngay_tra,
      nguoi_lon,
      tre_em,
      so_luong_phong,
      thanh_tien,
      ma_khach_hang,
    ];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      const ma_dat_phong = result.insertId;
      services.forEach((service) => {
        const query =
          "INSERT INTO dich_vu_don_dat (ma_dat_phong, ma_dich_vu) VALUES (?, ?)";
        const values = [ma_dat_phong, service.ma_dich_vu];
        db.query(query, values, (err) => {
          if (err) throw err;
        });
      });
      rooms.forEach((room) => {
        const query =
          "INSERT INTO chi_tiet_don_dat (ma_dat_phong, so_phong) VALUES (?, ?)";
        const values = [ma_dat_phong, room.so_phong];
        db.query(query, values, (err) => {
          if (err) throw err;
        });
      });
    });
  },
};

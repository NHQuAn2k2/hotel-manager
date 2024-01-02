const db = require("../mysqlConfig").getDb();
module.exports = {
  save: (data) => {
    const { loai_phong, gia_phong, mo_ta, so_luong_khach, ma_khach_san } = data;
    const query =
      "INSERT INTO phong (loai_phong, gia_phong, mo_ta, so_luong_khach, ma_khach_san) VALUES (?, ?, ?, ?, ?)";
    const values = [loai_phong, gia_phong, mo_ta, so_luong_khach, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (data) => {
    const {
      so_phong,
      loai_phong,
      gia_phong,
      mo_ta,
      so_luong_khach,
      tinh_trang,
      ma_khach_san,
    } = data;
    const query =
      "UPDATE phong SET tinh_trang = ?, mo_ta = ?, so_luong_khach = ?, loai_phong = ?, gia_phong = ? WHERE phong.so_phong = ? AND phong.ma_khach_san = ?";
    const values = [
      tinh_trang,
      mo_ta,
      so_luong_khach,
      loai_phong,
      gia_phong,
      so_phong,
      ma_khach_san,
    ];
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
      "SELECT so_phong, loai_phong, gia_phong, mo_ta, so_luong_khach FROM phong WHERE so_phong = ? AND ma_khach_san = ?";
    const values = [idRoom, idHotel];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  saveBooking: (data, callback) => {
    const {
      ho,
      ten,
      email,
      so_dien_thoai,
      thoi_gian_den,
      ngay_nhan,
      ngay_tra,
      ngay_dat,
      nguoi_lon,
      tre_em,
      yeu_cau_dac_biet,
      phong = [],
      tong_tien,
      phuong_thuc_thanh_toan,
      ngay_thanh_toan,
      so_tien_thanh_toan,
      ma_nguoi_dung,
    } = data;
    const insertBooking = () => {
      return new Promise((resolve, reject) => {
        const query =
          "INSERT INTO don_dat_phong (ho, ten, email, so_dien_thoai, thoi_gian_den, ngay_nhan, ngay_tra, nguoi_lon, tre_em, yeu_cau_dac_biet, tong_tien, ma_nguoi_dung, ngay_dat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        const values = [
          ho,
          ten,
          email,
          so_dien_thoai,
          thoi_gian_den,
          ngay_nhan,
          ngay_tra,
          nguoi_lon,
          tre_em,
          yeu_cau_dac_biet,
          tong_tien,
          ma_nguoi_dung,
          ngay_dat,
        ];
        db.query(query, values, (error, result) => {
          if (error) {
            reject();
          } else {
            resolve(result.insertId);
          }
        });
      });
    };
    const insertDetail = (ma_dat_phong) => {
      return new Promise((resolve, reject) => {
        phong.forEach((so_phong) => {
          const query =
            "INSERT INTO chi_tiet_don_dat (ma_dat_phong, so_phong, trang_thai) VALUES (?,?,?)";
          const values = [ma_dat_phong, so_phong, "da xac nhan"];
          db.query(query, values, (error) => {
            if (error) {
              reject(error);
            } else {
              resolve();
            }
          });
        });
      });
    };
    const insertPayment = (ma_dat_phong) => {
      return new Promise((resolve, reject) => {
        let query;
        let values;
        if (phuong_thuc_thanh_toan === "online") {
          query =
            "INSERT INTO thanh_toan (phuong_thuc_thanh_toan, ngay_thanh_toan, so_tien_thanh_toan, trang_thai, ma_dat_phong) VALUES (?, ?, ?, ?, ?)";
          values = [
            phuong_thuc_thanh_toan,
            ngay_thanh_toan,
            so_tien_thanh_toan,
            "da thanh toan",
            ma_dat_phong,
          ];
        }
        if (phuong_thuc_thanh_toan === "truc tiep") {
          query =
            "INSERT INTO thanh_toan (phuong_thuc_thanh_toan, trang_thai, ma_dat_phong) VALUES (?, ?, ?)";
          values = [phuong_thuc_thanh_toan, "chua thanh toan", ma_dat_phong];
        }
        db.query(query, values, (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    };
    const run = async () => {
      try {
        const ma_dat_phong = await insertBooking();
        await insertDetail(ma_dat_phong);
        await insertPayment(ma_dat_phong);
        callback(ma_dat_phong);
      } catch (error) {
        throw error;
      }
    };
    run();
  },
  getBooking: (data, callback) => {
    console.log(data);
  },
  deleteBooking: (data) => {
    console.log(data);
  },
};

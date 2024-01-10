const db = require("../mysqlConfig").getDb();
const Hotel = require("./Hotel");
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
            new Date(),
            tong_tien,
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
    const updateStatusRoom = () => {
      return new Promise((resolve, reject) => {
        phong.forEach((room) => {
          const query = "UPDATE phong SET tinh_trang = 1 WHERE so_phong = ?";
          const values = [room];
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
    const run = async () => {
      try {
        const ma_dat_phong = await insertBooking();
        await updateStatusRoom();
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
    const uniqueMaDatPhong = {};
    const query = `SELECT don_dat_phong.ma_dat_phong, ho, don_dat_phong.ten, email, so_dien_thoai, thoi_gian_den, ngay_nhan, ngay_tra, nguoi_lon, tre_em, yeu_cau_dac_biet, tong_tien, ngay_dat, phong.ma_khach_san, loai_phong, chi_tiet_don_dat.trang_thai, phuong_thuc_thanh_toan, ngay_thanh_toan, thanh_toan.trang_thai AS thanh_toan, khach_san.ten AS ten_khach_san 
    FROM don_dat_phong 
    JOIN chi_tiet_don_dat ON don_dat_phong.ma_dat_phong = chi_tiet_don_dat.ma_dat_phong 
    JOIN phong ON chi_tiet_don_dat.so_phong = phong.so_phong
    JOIN khach_san ON khach_san.ma_khach_san = phong.ma_khach_san 
    JOIN thanh_toan ON thanh_toan.ma_dat_phong = don_dat_phong.ma_dat_phong 
    WHERE ma_nguoi_dung = ?`;
    db.query(query, [data], (error, result) => {
      if (error) throw error;
      result.forEach((item) => {
        const maDatPhong = item.ma_dat_phong;
        const { loai_phong, ma_khach_san, ...rest } = item;
        if (!uniqueMaDatPhong[maDatPhong]) {
          uniqueMaDatPhong[maDatPhong] = {
            ...rest,
            phong: [],
          };
        }
        uniqueMaDatPhong[maDatPhong].phong.push(item.loai_phong);
      });
      callback(Object.values(uniqueMaDatPhong));
    });
  },
  deleteBooking: (data) => {
    const handleCancel = () => {
      return new Promise((resolve, reject) => {
        const query =
          "UPDATE chi_tiet_don_dat SET trang_thai = ? WHERE ma_dat_phong = ?";
        const values = ["da huy", data];
        db.query(query, values, (error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      });
    };
    const updateStatusRoom = () => {
      return new Promise((resolve, reject) => {
        const query =
          "UPDATE phong JOIN chi_tiet_don_dat ON phong.so_phong = chi_tiet_don_dat.so_phong SET tinh_trang = ? WHERE chi_tiet_don_dat.ma_dat_phong = ?";
        const values = [0, data];
        db.query(query, values, (error) => {
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
        await handleCancel();
        await updateStatusRoom();
      } catch (error) {
        throw error;
      }
    };
    run();
  },
  findAll: (callback) => {
    const query =
      "SELECT so_phong, loai_phong, gia_phong, phong.mo_ta, so_luong_khach, tinh_trang, khach_san.ten FROM phong JOIN khach_san ON phong.ma_khach_san = khach_san.ma_khach_san";
    db.query(query, (error, result) => {
      if (error) throw error;
      callback(result);
    });
  },
};

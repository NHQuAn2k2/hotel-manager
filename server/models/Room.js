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
  saveBooking: (data) => {
    const {
      ngay_dat,
      ngay_nhan,
      ngay_tra,
      nguoi_lon,
      tre_em,
      tong_tien,
      rooms = [],
      ma_nguoi_dung,
    } = data;
    const insertBooking = () => {
      return new Promise((resolve, reject) => {
        const query =
          "INSERT INTO don_dat_phong (ngay_dat, ngay_nhan, ngay_tra, nguoi_lon, tre_em, tong_tien, ma_nguoi_dung) VALUES (?, ?, ?, ?, ?, ?, ?)";
        const values = [
          ngay_dat,
          ngay_nhan,
          ngay_tra,
          nguoi_lon,
          tre_em,
          tong_tien,
          ma_nguoi_dung,
        ];
        db.query(query, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result.insertId);
          }
        });
      });
    };
    const insertRoom = (ma_dat_phong) => {
      return new Promise((resolve, reject) => {
        rooms.forEach((room) => {
          const query =
            "INSERT INTO chi_tiet_don_dat (ma_dat_phong, so_phong) VALUES (?, ?)";
          const values = [ma_dat_phong, room];
          db.query(query, values, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });
    };
    const updateStatusRoom = () => {
      return new Promise((resolve, reject) => {
        rooms.forEach((room) => {
          const query = "UPDATE phong SET tinh_trang = 1 WHERE so_phong = ?";
          const values = [room];
          db.query(query, values, (err) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      });
    };
    const runAll = async () => {
      try {
        const booking = await insertBooking();
        await insertRoom(booking);
        await updateStatusRoom();
      } catch (error) {
        throw error;
      }
    };
    runAll();
  },
  getBooking: (data, callback) => {
    const getBooking = () => {
      return new Promise((resolve, reject) => {
        const query =
          "SELECT * FROM don_dat_phong WHERE don_dat_phong.ma_nguoi_dung = ?";
        const values = [data];
        db.query(query, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
    const getRoom = (value) => {
      return Promise.all(
        value.map((item) => {
          return new Promise((resolve, reject) => {
            const query =
              "SELECT * FROM phong JOIN chi_tiet_don_dat ON phong.so_phong = chi_tiet_don_dat.so_phong WHERE chi_tiet_don_dat.ma_dat_phong = ?";
            const values = [item.ma_dat_phong];
            db.query(query, values, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve({ ...item, phong: results });
              }
            });
          });
        })
      );
    };
    const getAll = async () => {
      try {
        const booking = await getBooking();
        const result = await getRoom(booking);
        callback(result);
      } catch (error) {
        callback(error);
      }
    };
    getAll();
  },
  deleteBooking: (data) => {
    console.log(data);
  },
};

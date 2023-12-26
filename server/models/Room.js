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
    const insertBooking = () => {
      return new Promise((resolve, reject) => {
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
          if (err) {
            reject(err);
          } else {
            resolve(result.insertId);
          }
        });
      });
    };
    const insertService = (ma_dat_phong) => {
      return new Promise((resolve, reject) => {
        if (services.length <= 0) {
          resolve();
        } else {
          services.forEach((service) => {
            const query =
              "INSERT INTO dich_vu_don_dat (ma_dat_phong, ma_dich_vu) VALUES (?, ?)";
            const values = [ma_dat_phong, service.ma_dich_vu];
            db.query(query, values, (err) => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          });
        }
      });
    };
    const insertRoom = (ma_dat_phong) => {
      return new Promise((resolve, reject) => {
        rooms.forEach((room) => {
          const query =
            "INSERT INTO chi_tiet_don_dat (ma_dat_phong, so_phong) VALUES (?, ?)";
          const values = [ma_dat_phong, room.so_phong];
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
          const values = [room.so_phong];
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
        await insertService(booking);
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
          "SELECT * FROM don_dat_phong WHERE don_dat_phong.ma_khach_hang = ?";
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
    const getService = (value) => {
      return Promise.all(
        value.map((item) => {
          return new Promise((resolve, reject) => {
            const query =
              "SELECT * FROM dich_vu JOIN dich_vu_don_dat ON dich_vu.ma_dich_vu = dich_vu_don_dat.ma_dich_vu WHERE dich_vu_don_dat.ma_dat_phong = ?";
            const values = [item.ma_dat_phong];
            db.query(query, values, (err, results) => {
              if (err) {
                reject(err);
              } else {
                resolve({ ...item, dich_vu: results });
              }
            });
          });
        })
      );
    };
    const getAll = async () => {
      try {
        const booking = await getBooking();
        const room = await getRoom(booking);
        const result = await getService(room);
        callback(result);
      } catch (error) {
        callback(error);
      }
    };
    getAll();
  },
};

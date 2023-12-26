const db = require("../mysqlConfig").getDb();
module.exports = {
  findAll: (callback) => {
    const query = "SELECT * FROM khach_san";
    db.query(query, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: (data, callback) => {
    const { id } = data;
    const query1 = "SELECT * FROM khach_san WHERE khach_san.ma_khach_san = ?";
    const query2 = `
    SELECT so_phong, loai_phong, gia_phong, tinh_trang 
    FROM phong 
    JOIN khach_san ON phong.ma_khach_san = khach_san.ma_khach_san 
    WHERE khach_san.ma_khach_san = ?`;
    const query3 = `
    SELECT ma_danh_gia, diem_danh_gia, noi_dung_danh_gia, ngay_danh_gia, khach_hang.ten 
    FROM danh_gia 
    JOIN khach_san ON danh_gia.ma_khach_san = khach_san.ma_khach_san
    JOIN khach_hang ON danh_gia.ma_khach_hang = khach_hang.ma_khach_hang 
    WHERE khach_san.ma_khach_san = ?`;
    const query4 = `
    SELECT ma_dich_vu, ten_dich_vu, gia_dich_vu 
    FROM dich_vu 
    JOIN khach_san ON dich_vu.ma_khach_san = khach_san.ma_khach_san 
    WHERE khach_san.ma_khach_san = ?`;
    const executeQuery = (query, values) => {
      return new Promise((resolve, reject) => {
        db.query(query, values, (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        });
      });
    };
    Promise.all([
      executeQuery(query1, [id]),
      executeQuery(query2, [id]),
      executeQuery(query3, [id]),
      executeQuery(query4, [id]),
    ])
      .then(([result1, result2, result3, result4]) => {
        const newData = {
          ...result1[0],
          phong: result2,
          danh_gia: result3,
          dich_vu: result4,
        };
        callback(newData);
      })
      .catch((err) => {
        throw err;
      });
  },
  findOne: (data, callback) => {
    let query;
    if ("search_query_name" in data) {
      const { search_query_name } = data;
      query = `SELECT * FROM khach_san WHERE ten LIKE '%${search_query_name}%'`;
    }
    if ("search_query_address" in data) {
      const { search_query_address } = data;
      query = `SELECT * FROM khach_san WHERE dia_chi LIKE '%${search_query_address}%'`;
    }
    db.query(query, (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  save: (data, dataFile) => {
    const { ten, dia_chi, mo_ta } = data;
    const hinh_anh = dataFile;
    const query =
      "INSERT INTO khach_san (ten, hinh_anh, dia_chi, mo_ta) VALUES (?, ?, ?, ?)";
    const values = [ten, hinh_anh, dia_chi, mo_ta];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  updateById: (data) => {
    const { ma_khach_san, ten, dia_chi, mo_ta } = data;
    const query =
      "UPDATE khach_san SET ten = ?, dia_chi = ?, mo_ta = ? WHERE ma_khach_san = ?";
    const values = [ten, dia_chi, mo_ta, ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  removeById: (data) => {
    const { ma_khach_san } = data;
    const query = "DELETE FROM khach_san WHERE ma_khach_san = ?";
    const values = [ma_khach_san];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
};

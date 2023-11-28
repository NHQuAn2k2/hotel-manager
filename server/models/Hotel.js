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
    const query = "SELECT * FROM khach_san WHERE khach_san.ma_khach_san = ?";
    const query2 =
      "SELECT ma_phong, so_phong, loai_phong, gia_phong, tinh_trang FROM phong JOIN khach_san ON phong.ma_khach_san = khach_san.ma_khach_san WHERE khach_san.ma_khach_san = ?";
    const values = [id];
    const values2 = [id];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      db.query(query2, values2, (err, result2) => {
        if (err) throw err;
        const newResult = { ...result[0], phong: result2 };
        callback(newResult);
      });
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
  save: (data) => {
    const { ten, dia_chi, mo_ta } = data;
    const query =
      "INSERT INTO khach_san (ten, dia_chi, mo_ta) VALUES (?, ?, ?)";
    const values = [ten, dia_chi, mo_ta];
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
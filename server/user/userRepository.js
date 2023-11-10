const db = require("../mysqlConfig").getDb();
module.exports = {
  findAll: (callback) => {
    db.query("SELECT * FROM user", (err, result) => {
      if (err) throw err;
      callback(result);
    });
  },
  findById: (id, callback) => {
    const query =
      "SELECT user.id, user.username, user.email, user_infor.sdt, user_infor.birthday, user_infor.nationality, user_infor.sex, user_infor.address FROM user JOIN user_infor ON user.id = user_infor.user_id where user.id = ?";
    db.query(query, [id], (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  findByName: (name, callback) => {
    const query = "SELECT * FROM user WHERE username = ?";
    const values = [name];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  findByEmail: (email, callback) => {
    const query = "SELECT * FROM user WHERE email = ?";
    const values = [email];
    db.query(query, values, (err, result) => {
      if (err) throw err;
      callback(result[0]);
    });
  },
  save: (user) => {
    const query =
      "INSERT INTO user (username, email, password) VALUES (?, ?, ?)";
    const values = [user.username, user.email, user.password];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  update: (user) => {
    const query =
      "UPDATE user JOIN user_infor ON user.id = user_infor.user_id SET username = ?, email = ?, sdt = ?, birthday = ?, nationality = ?, sex = ?, address = ? WHERE user.id = ?";
    const values = [
      user.username,
      user.email,
      user.sdt,
      user.birthday,
      user.nationality,
      user.sex,
      user.address,
      user.id,
    ];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  removeById: (id) => {
    const query = "DELETE FROM user WHERE id = ?";
    const values = [id];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  insertBooking: (data) => {
    console.log(data);
    const { user_id, hotel_id, room_id, start_date, end_date } = data;
    const query =
      "INSERT INTO booking (user_id, hotel_id, room_id, start_date, end_date) VALUES (?, ?, ?, ?, ?)";
    const values = [user_id, hotel_id, room_id, start_date, end_date];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  insertComments: (data) => {
    const { user_id, hotel_id, room_id, booking_id, rating, comment_text } =
      data;
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const currentDate = `${year}-${month}-${day}`;
    const query =
      "INSERT INTO comments (user_id, hotel_id, room_id, booking_id, rating, comment_text, comment_date) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [
      user_id,
      hotel_id,
      room_id,
      booking_id,
      rating,
      comment_text,
      currentDate,
    ];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
  deleteBooking: (data) => {
    const query = "DELETE FROM booking where id = ?";
    const values = [data];
    db.query(query, values, (err) => {
      if (err) throw err;
    });
  },
};

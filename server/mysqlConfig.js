const mysql = require("mysql2");
let db;
module.exports = {
  connect: (host, user, password, database) => {
    db = mysql.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });
    db.connect((err) => {
      if (err) throw err;
      console.log("Connected!");
    });
  },
  getDb: () => {
    if (!db) throw new Error("db is not initialized");
    return db;
  },
};

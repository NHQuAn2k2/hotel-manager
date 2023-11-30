const Customer = require("../models/Customer");
const { generateToken } = require("../jwt/jwtService");
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");
const Review = require("../models/Review");
module.exports = {
  login: (req, res) => {
    const checkTen = () =>
      new Promise((resolve, reject) => {
        Customer.findByName(req.body, (data) => {
          if (data.length > 0) {
            resolve(req.body);
          } else {
            reject("ten khong ton tai!");
          }
        });
      });
    const checkEmail = (value) =>
      new Promise((resolve, reject) => {
        Customer.findByEmail(value, (data) => {
          if (data.length > 0) {
            resolve(value);
          } else {
            reject("email khong ton tai!");
          }
        });
      });
    const checkPassword = (value) =>
      new Promise((resolve, reject) => {
        Customer.findByName(value, (data) => {
          if (value.mat_khau !== data[0].mat_khau) {
            reject("mat khau khong dung!");
          } else {
            resolve(value);
          }
        });
      });
    checkTen()
      .then(checkEmail)
      .then(checkPassword)
      .then((value) => {
        const token = generateToken(value);
        return res.status(200).json({ token });
      })
      .catch((err) => res.status(400).json({ message: err }));
  },
  register: (req, res) => {
    const checkTen = () => {
      return new Promise((resolve, reject) => {
        Customer.findByName(req.body, (data) => {
          if (data.length > 0) {
            reject("ten da ton tai!");
          } else {
            resolve(req.body);
          }
        });
      });
    };
    const checkEmail = (value) => {
      return new Promise((resolve, reject) => {
        Customer.findByEmail(value, (data) => {
          if (data.length > 0) {
            reject("email da ton tai!");
          } else {
            resolve(value);
          }
        });
      });
    };
    checkTen()
      .then(checkEmail)
      .then((value) => {
        Customer.save(value);
        const token = generateToken(value);
        return res.status(200).json({ token });
      })
      .catch((err) => res.status(400).json({ message: err }));
  },
  viewHotel: (req, res) => {
    Hotel.findAll((data) => {
      if (data.length > 0) {
        return res.status(200).json(data);
      } else {
        return res.status(200).json({ message: "khong co du lieu" });
      }
    });
  },
  detailHotel: (req, res) => {
    Hotel.findById(req.params, (data) => {
      return res.status(200).json(data);
    });
  },
  addHotel: (req, res) => {
    Hotel.save(req.body);
    return res.status(200).json({ message: "them khach san thanh cong" });
  },
  editHotel: (req, res) => {
    Hotel.updateById(req.body);
    return res.status(200).json({ message: "cap nhat khach san thanh cong" });
  },
  deleteHotel: (req, res) => {
    Hotel.removeById(req.body);
    return res.status(200).json({ message: "xoa khach san thanh cong" });
  },
  searchHotel: (req, res) => {
    Hotel.findOne(req.query, (data) => {
      if (data.length > 0) {
        return res.status(200).json(data);
      } else {
        return res.status(200).json({ message: "khong tim thay khach san" });
      }
    });
  },
  reviewHotel: (req, res) => {
    Review.save(req.body);
    res.status(200).json({ message: "danh gia thanh cong" });
  },
  detailRoom: (req, res) => {
    Room.findOne(req.params, (data) => {
      res.status(200).json(data);
    });
  },
  addRoom: (req, res) => {
    const data = { ...req.body, ma_khach_san: req.params.id };
    Room.save(data);
    res.status(200).json({ message: "them thanh cong" });
  },
  editRoom: (req, res) => {
    const data = { ...req.body, ma_khach_san: req.params.id };
    Room.update(data);
    res.status(200).json({ message: "sua thanh cong" });
  },
  deleteRoom: (req, res) => {
    const data = { ...req.body, ma_khach_san: req.params.id };
    Room.delete(data);
    res.status(200).json({ message: "xoa thanh cong" });
  },
  bookingRoom: (req, res) => {
    Room.saveBooking(req.body);
    res.status(200).json();
  },
};

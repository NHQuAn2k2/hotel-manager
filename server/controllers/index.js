const Customer = require("../models/Customer");
const { generateToken } = require("../jwt/jwtService");
const Hotel = require("../models/Hotel");
const Room = require("../models/Room");
const Review = require("../models/Review");
const nodemailer = require("nodemailer");
const emailSender = "mhoangquan0@gmail.com";
const uuid = require("uuid");
const pass = "ojkp fjvq hjih xhfs";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailSender,
    pass: pass,
  },
});
const passwordResetTokens = {};
module.exports = {
  login: (req, res) => {
    const checkEmail = () =>
      new Promise((resolve, reject) => {
        Customer.findByEmail(req.body, (data) => {
          if (data.length > 0) {
            resolve(req.body);
          } else {
            reject("email khong ton tai!");
          }
        });
      });
    const checkPassword = (value) =>
      new Promise((resolve, reject) => {
        Customer.findByEmail(value, (data) => {
          if (value.mat_khau !== data[0].mat_khau) {
            reject("mat khau khong dung!");
          } else {
            resolve(data[0]);
          }
        });
      });
    checkEmail()
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
        Customer.findByName(value, (data) => {
          const token = generateToken(data[0]);
          return res.status(200).json({ token });
        });
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
    const data = req.body;
    const dataFile = req.file?.filename;
    Hotel.save(data, dataFile);
    return res.status(200).json({ message: "them khach san thanh cong" });
  },
  editHotel: (req, res) => {
    const dataFile = req.file?.filename;
    Hotel.updateById(req.body, dataFile);
    return res.status(200).json({ message: "cap nhat khach san thanh cong" });
  },
  deleteHotel: (req, res) => {
    Hotel.removeById(req.params);
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
    function formatNumber(number) {
      let formattedNumber = number.toLocaleString("en-US");
      formattedNumber = formattedNumber.replace(/,/g, ",");
      return formattedNumber;
    }
    Room.saveBooking(req.body, (ma_dat_phong) => {
      const contentHtml = `<h1>Cam on ${
        req.body.ho + " " + req.body.ten
      }! Dat phong cua ban da duoc xac nhan.</h1>
          <h3>Duoi day la thong tin chi tiet ve dat phong cua ban.</h3>
          <ul>
            <li>Ma dat phong: ${ma_dat_phong}</li>
            <li>Ten nguoi dat: ${req.body.ho + " " + req.body.ten}</li>
            <li>Ngay dat phong: ${req.body.ngay_dat}</li>
            <li>So dien thoai lien he: ${req.body.so_dien_thoai}</li>
            <li>Email: ${req.body.email}</li>
            <li>Ngay nhan phong: ${req.body.ngay_nhan}</li>
            <li>Ngay tra phong: ${req.body.ngay_tra}</li>
            <li>Thoi gian den: ${req.body.thoi_gian_den}</li>
            <li>Nguoi lon: ${req.body.nguoi_lon}</li>
            <li>Tre em: ${req.body.tre_em}</li>
            <li>Yeu cau dac biet: ${
              req.body.yeu_cau_dac_biet === ""
                ? "khong co"
                : req.body.yeu_cau_dac_biet
            }</li>
            <li>So luong phong: ${req.body.phong.length}</li>
            <li>Loai phong: ${req.body.loai_phong.join(", ")}</li>
            <li><h4>Tong tien: ${formatNumber(req.body.tong_tien)} VND</h4></li>
          </ul>
          <h4>Chung toi rat mong duoc phuc vu ban va hy vong ban co mot ky nghi tuyet voi!</h4>
          <h4>Tran trong.</h4>
          `;
      const contentSubject = `Khach san ${req.body.khach_san}`;
      transporter.sendMail(
        {
          from: emailSender,
          to: req.body.email,
          subject: contentSubject,
          html: contentHtml,
        },
        (error, infor) => {
          if (error) {
            return res.status(400).json(error);
          } else {
            return res.status(200).json(infor);
          }
        }
      );
    });
  },
  cancelBooking: (req, res) => {
    const { id, email, ten_khach_san } = req.params;
    Room.deleteBooking(id);
    const contentHtml = `<h1>Don dat phong cua ban da duoc huy.</h1>
    <h4>Ma dat phong: ${id}</h4>
          <h4>Chung toi hy vong co the gap lai ban!</h4>
          <h4>Tran trong.</h4>
          `;
    const contentSubject = `Khach san ${ten_khach_san}`;
    transporter.sendMail(
      {
        from: emailSender,
        to: email,
        subject: contentSubject,
        html: contentHtml,
      },
      (error, infor) => {
        if (error) {
          return res.status(400).json(error);
        } else {
          return res.status(200).json(infor);
        }
      }
    );
  },
  getBookingById: (req, res) => {
    const id = req.params.id;
    Room.getBooking(id, (data) => {
      return res.status(200).json(data);
    });
  },
  codePassword: (req, res) => {
    const { email } = req.body;
    Customer.findByEmail({ email }, (data) => {
      if (data.length > 0) {
        const resetToken = uuid.v4();
        passwordResetTokens[data[0].ma_nguoi_dung] = resetToken;
        transporter.sendMail(
          {
            from: emailSender,
            to: email,
            subject: "Booking.com: Doi mat khau",
            html: `<h3>Ma so reset mat khau cua ban la: ${resetToken}</h3>
            `,
          },
          (error, infor) => {
            if (error) {
              return res.status(400).json(error);
            } else {
              return res.status(200).json(infor);
            }
          }
        );
      } else {
        return res.status(400).json({ message: "email khong ton tai!" });
      }
    });
  },
  verifyCode: (req, res) => {
    const { resetToken } = req.body;
    const ma_nguoi_dung = Object.keys(passwordResetTokens).find(
      (id) => passwordResetTokens[id] === resetToken
    );
    if (!ma_nguoi_dung) {
      return res.status(400).json({ message: "ma xac thuc khong dung!" });
    }
    return res
      .status(200)
      .json({ message: "xac thuc thanh cong!", ma_nguoi_dung });
  },
  resetPassword: (req, res) => {
    const { ma_nguoi_dung, mat_khau_moi, xac_nhan_mat_khau } = req.body;
    if (mat_khau_moi !== xac_nhan_mat_khau) {
      return res.status(400).json({ message: "xac nhan mat khau khong dung!" });
    }
    Customer.updatePassword({ ma_nguoi_dung, mat_khau_moi });
    return res.status(200).json({ message: "doi mat khau thanh cong!" });
  },
  getRoom: (req, res) => {
    Room.findAll((data) => {
      if (data.length <= 0) {
        return res.status(400).json();
      }
      return res.status(200).json(data);
    });
  },
};

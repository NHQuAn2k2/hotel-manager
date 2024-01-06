import React, { useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import dayjs from "dayjs";
import { formatNumber } from "../utils";
export default function DialogCancelBooking({
  open,
  onClose = () => {},
  data,
}) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  if (Object.keys(data).length === 0) {
    return null;
  } else {
    return (
      <Dialog open={open}>
        <DialogTitle>Chi tiet don dat phong</DialogTitle>
        <DialogContent dividers={true} sx={{ width: "500px" }}>
          <Typography marginBottom={2}>
            <strong>Ma dat phong:</strong> {data.ma_dat_phong}
          </Typography>
          <Typography gutterBottom>
            <strong>Ten khach san:</strong> {data.ten_khach_san}
          </Typography>
          <Typography gutterBottom>
            <strong>Ngay dat:</strong>{" "}
            {dayjs(data.ngay_dat).format("DD/MM/YYYY")}
          </Typography>
          <Typography gutterBottom>
            <strong>Ho va Ten nguoi dat:</strong> {data.ho + " " + data.ten}
          </Typography>
          <Typography gutterBottom>
            <strong>Email:</strong> {data.email}
          </Typography>
          <Typography gutterBottom>
            <strong>So dien thoai:</strong> {data.so_dien_thoai}
          </Typography>
          <Typography gutterBottom>
            <strong>Ngay nhan</strong>:{" "}
            {dayjs(data.ngay_nhan).format("DD/MM/YYYY")}
          </Typography>
          <Typography gutterBottom>
            <strong>Ngay tra</strong>:{" "}
            {dayjs(data.ngay_tra).format("DD/MM/YYYY")}
          </Typography>
          <Typography gutterBottom>
            <strong>Thoi gian den: </strong> {data.thoi_gian_den}
          </Typography>
          <Typography gutterBottom>
            <strong>Nguoi lon:</strong> {data.nguoi_lon}
          </Typography>
          <Typography gutterBottom>
            <strong>Tre em:</strong> {data.tre_em}
          </Typography>
          <Typography gutterBottom>
            <strong>Yeu cau dac biet:</strong>{" "}
            {data.yeu_cau_dac_biet === "" ? "khong co" : data.yeu_cau_dac_biet}
          </Typography>
          <Typography gutterBottom>
            <strong>Loai phong:</strong> {data?.phong.join(", ")}
          </Typography>
          <Typography gutterBottom>
            <strong>Phuong thuc thanh toan:</strong>{" "}
            {data.phuong_thuc_thanh_toan}
          </Typography>
          <Typography gutterBottom>
            <strong>Thanh toan: </strong> {data.thanh_toan}
          </Typography>
          <Typography>
            <strong>Ngay thanh toan:</strong>{" "}
            {data.ngay_thanh_toan !== null
              ? dayjs(data.ngay_thanh_toan).format("DD/MM/YYYY")
              : "chua thanh toan"}
          </Typography>
          <Typography variant="h6" marginTop={2}>
            <strong>Tong tien:</strong> {formatNumber(data.tong_tien)} VND
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            thoat
          </Button>
          <Button variant="contained">huy dat phong</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

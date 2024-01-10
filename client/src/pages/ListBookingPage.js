import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { api, formatNumber, token } from "../utils";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { DialogCancelBooking } from "../components";
export default function ListBookingPage() {
  const navigate = useNavigate();
  const [listBooking, setListBooking] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
    const getListBooking = async () => {
      try {
        const res = await axios.get(
          `${api}/booking/${token ? jwtDecode(token).ma : ""}`,
          { headers: { Authorization: `Bearer ${token ? token : ""}` } }
        );
        setListBooking(res.data);
      } catch (error) {}
    };
    getListBooking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box>
      <Typography variant="h6" fontWeight={"bold"} color={"black"}>
        Cac don dat phong cua ban
      </Typography>
      <Grid paddingTop={2} spacing={2} container>
        {listBooking.length > 0 ? (
          listBooking.map((item) => (
            <Grid key={item.ma_dat_phong} item xs={12}>
              <DialogCancelBooking
                open={open}
                onClose={() => setOpen(false)}
                id={item.ma_dat_phong}
                email={item.email}
                ten_khach_san={item.ten_khach_san}
              />
              <Accordion variant="outlined">
                <AccordionSummary>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    width={"100%"}
                  >
                    <div>
                      <Typography gutterBottom fontWeight={"bold"}>
                        {item.ten_khach_san}
                      </Typography>
                      <Typography gutterBottom>
                        {dayjs(item.ngay_nhan).format("DD/MM/YYYY")} -{" "}
                        {dayjs(item.ngay_tra).format("DD/MM/YYYY")}
                      </Typography>
                      <Typography
                        fontWeight={"bold"}
                        variant="body2"
                        color={
                          item.trang_thai === "da xac nhan" ? "green" : "red"
                        }
                      >
                        {item.trang_thai.toUpperCase()}
                      </Typography>
                    </div>
                    <Typography fontWeight={"bold"}>
                      {formatNumber(item.tong_tien)} VND
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography marginBottom={2}>
                    <strong>Ma dat phong:</strong> {item.ma_dat_phong}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Ten khach san:</strong> {item.ten_khach_san}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Ngay dat:</strong>{" "}
                    {dayjs(item.ngay_dat).format("DD/MM/YYYY")}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Ho va Ten nguoi dat:</strong>{" "}
                    {item.ho + " " + item.ten}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Email:</strong> {item.email}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>So dien thoai:</strong> {item.so_dien_thoai}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Ngay nhan</strong>:{" "}
                    {dayjs(item.ngay_nhan).format("DD/MM/YYYY")}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Ngay tra</strong>:{" "}
                    {dayjs(item.ngay_tra).format("DD/MM/YYYY")}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Thoi gian den: </strong> {item.thoi_gian_den}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Nguoi lon:</strong> {item.nguoi_lon}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Tre em:</strong> {item.tre_em}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Yeu cau dac biet:</strong>{" "}
                    {item.yeu_cau_dac_biet === ""
                      ? "khong co"
                      : item.yeu_cau_dac_biet}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Loai phong:</strong> {item?.phong.join(", ")}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Phuong thuc thanh toan:</strong>{" "}
                    {item.phuong_thuc_thanh_toan}
                  </Typography>
                  <Typography gutterBottom>
                    <strong>Thanh toan: </strong> {item.thanh_toan}
                  </Typography>
                  <Typography>
                    <strong>Ngay thanh toan:</strong>{" "}
                    {item.ngay_thanh_toan !== null
                      ? dayjs(item.ngay_thanh_toan).format("DD/MM/YYYY")
                      : "chua thanh toan"}
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography variant="h6" marginTop={2}>
                      <strong>Tong tien:</strong> {formatNumber(item.tong_tien)}{" "}
                      VND
                    </Typography>
                    {item.trang_thai === "da xac nhan" && (
                      <Button
                        size="small"
                        sx={{ marginTop: 2 }}
                        variant="contained"
                        onClick={() => setOpen(true)}
                      >
                        huy dat phong
                      </Button>
                    )}
                  </Stack>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ))
        ) : (
          <Grid item xs={6}>
            <Typography variant="body2">
              ban khong co don dat phong nao
            </Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

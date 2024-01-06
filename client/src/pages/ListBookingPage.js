import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
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
  const [dataDialog, setDataDialog] = useState({});
  const handleOpenDialog = (item) => {
    setDataDialog(item);
    setOpen(true);
  };
  const handleCloseDialog = () => {
    setOpen(false);
  };
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
            <Grid key={item.ma_dat_phong} item xs={6}>
              <Paper
                variant="outlined"
                sx={{
                  padding: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
                onClick={() => handleOpenDialog(item)}
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
                    color={"green"}
                  >
                    {item.trang_thai}
                  </Typography>
                </div>
                <Typography fontWeight={"bold"}>
                  {formatNumber(item.tong_tien)} VND
                </Typography>
              </Paper>
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
      <DialogCancelBooking
        open={open}
        onClose={handleCloseDialog}
        data={dataDialog}
      />
    </Box>
  );
}

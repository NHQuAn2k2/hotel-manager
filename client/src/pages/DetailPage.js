import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api, apiImages, token } from "../utils";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import dayjs from "dayjs";
import DialogReview from "../modules/review/DialogReview";
import Booking from "../components/Booking";
import { BookingContext } from "../context/BookingContext";
import KingBedIcon from "@mui/icons-material/KingBed";
import DialogBooking from "../modules/detail/DialogBooking";
export default function DetailPage() {
  const { booking, setBooking } = useContext(BookingContext);
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [open, setOpen] = useState({ review: false, booking: false });
  const handleCloseDialog = (field) => {
    setOpen((pre) => ({ ...pre, [field]: false }));
  };
  const handleOpenDialog = (field) => {
    if (token === undefined) {
      alert("Ban chua dang nhap!");
      return;
    }
    if (booking.ngay_nhan === "" || booking.ngay_tra === "") {
      alert("Ban chua chon ngay nhan hoac ngay tra phong!");
      return;
    }
    if (booking.rooms.length <= 0) {
      alert("Ban chua chon phong!");
      return;
    }
    setOpen((pre) => ({ ...pre, [field]: true }));
    setBooking((pre) => ({
      ...pre,
      thanh_tien: handleSumRoomAndService(),
      so_luong_phong: getCountRoom(),
    }));
  };
  const getCountRoom = () => {
    return booking.rooms.length;
  };
  const handleSumRoomAndService = () => {
    const totalGiaPhong = booking.rooms.reduce(
      (acc, room) => acc + room.gia_phong,
      0
    );
    const totalGiaDichVu = booking.services.reduce(
      (acc, service) => acc + service.gia_dich_vu,
      0
    );
    const total = totalGiaPhong + totalGiaDichVu;
    return total;
  };
  const handleChangeCheckBox = (field, payload, e) => {
    setBooking((pre) => {
      if (e.target.checked) {
        return {
          ...pre,
          [field]: [...pre[field], payload],
        };
      } else {
        const newIds = pre[field].filter((id) => id !== payload);
        return {
          ...pre,
          [field]: newIds,
        };
      }
    });
  };
  useEffect(() => {
    const handleDetailHotel = async () => {
      try {
        const res = await axios.get(`${api}/hotel/${id}`);
        setHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleDetailHotel();
  }, [id]);
  return (
    <div>
      <Stack>
        <Typography variant="h5">{hotel?.ten}</Typography>
        <Stack
          sx={{ marginTop: 1 }}
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={1}
        >
          <FmdGoodOutlinedIcon color="primary" />
          <Typography color={"Highlight"} variant="body1">
            {hotel?.dia_chi}
          </Typography>
        </Stack>
        <Box sx={{ marginTop: 2, height: "700px" }}>
          <img
            alt=""
            src={
              hotel?.hinh_anh === "" ? "" : `${apiImages}/${hotel?.hinh_anh}`
            }
          />
        </Box>
        <Typography
          fontWeight={"bold"}
          sx={{ marginTop: 5, marginBottom: 1 }}
          variant="h6"
        >
          Mo Ta
        </Typography>
        <Typography sx={{ width: "800px" }}>{hotel?.mo_ta}</Typography>
        <Typography
          fontWeight={"bold"}
          variant="h6"
          sx={{ marginTop: 5, marginBottom: 1 }}
        >
          Dat Phong
        </Typography>
        <Stack flexDirection={"column"} rowGap={2}>
          <Booking />
          <Box>
            <Typography fontWeight={"bold"}>Dich vu cua khach san</Typography>
            <FormGroup row>
              {hotel?.dich_vu?.map((item) => (
                <FormControlLabel
                  onChange={(e) => handleChangeCheckBox("services", item, e)}
                  key={item.ma_dich_vu}
                  control={<Checkbox />}
                  label={`${item.ten_dich_vu} • ${item.gia_dich_vu} VND`}
                />
              ))}
            </FormGroup>
          </Box>
          <TableContainer component={Paper} variant="outlined">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Chon Phong
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Loai Phong
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", fontSize: "16px" }}>
                    Gia Hom Nay
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {hotel?.phong?.map((item) => (
                  <TableRow key={item.so_phong}>
                    <TableCell>
                      <Checkbox
                        onChange={(e) => handleChangeCheckBox("rooms", item, e)}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack
                        flexDirection={"row"}
                        alignItems={"center"}
                        columnGap={1}
                      >
                        <KingBedIcon color="primary" />
                        <Typography>{item.loai_phong}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{item.gia_phong} VND • 1 Dem</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={() => handleOpenDialog("booking")}
            sx={{ width: "200px" }}
            variant="contained"
          >
            dat phong
          </Button>
          <DialogBooking
            open={open.booking}
            onClose={() => handleCloseDialog("booking")}
          />
        </Stack>
        <Stack
          marginTop={5}
          marginBottom={1}
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={2}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Danh Gia Cua Khach Hang
          </Typography>
          <Button
            onClick={() => handleOpenDialog("review")}
            variant="outlined"
            size="small"
          >
            viet danh gia
          </Button>
        </Stack>
        <Grid container spacing={2}>
          {hotel?.danh_gia?.length > 0 ? (
            hotel?.danh_gia?.map((item) => (
              <Grid key={item.ma_danh_gia} item xs={4}>
                <Paper sx={{ padding: 2 }}>
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      columnGap={1}
                    >
                      <Avatar sizes="small" />
                      <div>
                        <Typography fontWeight={"bold"}>{item.ten}</Typography>
                        <Typography variant="caption">
                          {dayjs(item.ngay_danh_gia).format("DD/MM/YYYY")}
                        </Typography>
                      </div>
                    </Stack>
                    <Chip
                      color="primary"
                      size="medium"
                      variant="filled"
                      sx={{ fontWeight: "bold" }}
                      label={`${item.diem_danh_gia}`}
                    />
                  </Stack>
                  <Typography marginTop={2}>
                    {item.noi_dung_danh_gia}
                  </Typography>
                </Paper>
              </Grid>
            ))
          ) : (
            <Grid item xs={4}>
              <Typography>Khong co danh gia nao.</Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
      <DialogReview
        open={open.review}
        onClose={() => handleCloseDialog("review")}
      />
    </div>
  );
}

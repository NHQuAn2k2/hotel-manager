import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, apiImages, displayPerson, formatNumber, token } from "../utils";
import {
  Box,
  Checkbox,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Button,
  TextField,
  Grid,
  Chip,
} from "@mui/material";
import {
  AccountCircleIcon,
  AddCircleIcon,
  BedIcon,
  FmdGoodOutlinedIcon,
  RemoveCircleIcon,
} from "../icon";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import dayjs from "dayjs";
import { BookingContext } from "../context/BookingContext";
import { AuthContext } from "../context/AuthContext";
import jwtDecode from "jwt-decode";
const { beforeToday } = DateRangePicker;
export default function DetailPage() {
  const [total, setTotal] = useState(() => {
    const total = localStorage.getItem("total");
    return total ? Number(total) : 1;
  });
  const [totalHotel, setTotalHotel] = useState(() => {
    const total = localStorage.getItem("totalHotel");
    return total ? Number(total) : 0;
  });
  useEffect(() => {
    localStorage.setItem("total", total);
  }, [total]);
  useEffect(() => {
    localStorage.setItem("totalHotel", totalHotel);
  }, [totalHotel]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { booking, setBooking } = useContext(BookingContext);
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [review, setReview] = useState({
    diem_danh_gia: "",
    noi_dung_danh_gia: "",
    ngay_danh_gia: dayjs(new Date()).format("YYYY/MM/DD"),
    ma_nguoi_dung: token ? jwtDecode(token).ma : "",
    ma_khach_san: id,
  });
  const handleChangeInput = (e) => {
    setReview((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleReview = async () => {
    if (user === "") {
      alert("ban chua dang nhap!");
      return;
    }
    if (review.noi_dung_danh_gia === "" || review.diem_danh_gia === "") {
      alert("ban chua nhap du thong tin danh gia!");
      return;
    }
    try {
      await axios.post(`${api}/review/hotel`, review, {
        headers: { Authorization: `Bearer ${token ? token : ""}` },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`${api}/hotel/${id}`);
        setHotel(res.data);
        setBooking((pre) => ({ ...pre, khach_san: res.data.ten }));
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  const handleCountPerson = (field, actions) => {
    switch (actions) {
      case "increase":
        setBooking((pre) => ({ ...pre, [field]: booking[field] + 1 }));
        setTotal((pre) => (pre += 1));
        return;
      case "decrease":
        if (field === "nguoi_lon" && booking[field] === 1) return;
        if (field === "tre_em" && booking[field] === 0) return;
        setBooking((pre) => ({ ...pre, [field]: booking[field] - 1 }));
        setTotal((pre) => (pre -= 1));
        return;
      default:
        return;
    }
  };
  const handleChangeDate = (date) => {
    if (!date) return;
    const ngay_nhan = dayjs(date[0]).format("YYYY/MM/DD");
    const ngay_tra = dayjs(date[1]).format("YYYY/MM/DD");
    setBooking((pre) => ({
      ...pre,
      ngay_nhan: ngay_nhan,
      ngay_tra: ngay_tra,
      tong_tien: 0,
      phong: [],
    }));
    if (ngay_nhan && ngay_tra) {
      const so_dem = dayjs(ngay_tra).diff(dayjs(ngay_nhan), "day");
      so_dem === 0
        ? setBooking((pre) => ({ ...pre, so_dem: 1 }))
        : setBooking((pre) => ({ ...pre, so_dem }));
    }
  };
  const handleChooseRoom = (e, so_phong, gia, loai_phong, so_luong_khach) => {
    const checked = e.target.checked;
    if (checked) {
      setTotalHotel((pre) => (pre += so_luong_khach));
      setBooking((pre) => ({
        ...pre,
        phong: [...pre.phong, so_phong],
        loai_phong: [...pre.loai_phong, loai_phong],
        tong_tien: (pre.tong_tien += gia),
      }));
    } else {
      setTotalHotel((pre) => (pre -= so_luong_khach));
      setBooking((pre) => ({
        ...pre,
        phong: pre.phong.filter((item) => item !== so_phong),
        loai_phong: pre.loai_phong.filter((item) => item !== loai_phong),
        tong_tien: (pre.tong_tien -= gia),
      }));
    }
  };
  const handleBooking = () => {
    if (user === "") {
      alert("ban chua dang nhap hoac dang ky!");
      return;
    }
    if (booking.ngay_nhan === "" || booking.ngay_tra === "") {
      alert("ban chua chon ngay nhan va ngay tra!");
      return;
    }
    if (booking.phong.length <= 0) {
      alert("ban chua chon phong!");
      return;
    }
    if (total > totalHotel) {
      alert("so luong nguoi lon hon so luong toi da cua phong!");
      return;
    }
    navigate("/booking/hotel/" + id);
  };
  return (
    <Box>
      <Typography color={"black"} marginBottom={1} variant="h5">
        {hotel.ten}
      </Typography>
      <Stack
        marginBottom={2}
        flexDirection={"row"}
        alignItems={"center"}
        columnGap={1}
      >
        <FmdGoodOutlinedIcon color="primary" />
        <Typography color={"Highlight"}>{hotel.dia_chi}</Typography>
      </Stack>
      <Stack flexDirection={"row"} columnGap={2} height={"562px"}>
        <Box width={"500px"} height={"100%"} flexShrink={0}>
          <img alt="" src={`${apiImages}/${hotel.hinh_anh}`} />
        </Box>
        <Stack flexDirection={"column"} justifyContent={"space-between"}>
          <Box>
            <Typography color={"black"} variant="h6" fontWeight={"bold"}>
              Mo Ta
            </Typography>
            <Typography color={"black"}>{hotel.mo_ta}</Typography>
          </Box>
          <Box>
            <Stack
              flexDirection={"row"}
              marginBottom={2}
              columnGap={5}
              alignItems={"end"}
            >
              <Stack flexDirection={"column"} rowGap={1}>
                <Typography color={"black"} variant="h6" fontWeight={"bold"}>
                  Phong trong
                </Typography>
                <DateRangePicker
                  format="dd/MM/yyyy"
                  placeholder={
                    booking.ngay_nhan && booking.ngay_tra
                      ? dayjs(booking.ngay_nhan).format("DD/MM/YYYY") +
                        " ~ " +
                        dayjs(booking.ngay_tra).format("DD/MM/YYYY")
                      : "Ngay Nhan Phong - Ngay Tra Phong"
                  }
                  shouldDisableDate={beforeToday()}
                  style={{ width: "400px" }}
                  size="lg"
                  onChange={handleChangeDate}
                />
              </Stack>
              <Stack flexDirection={"column"} alignItems={"center"}>
                <Typography color={"black"}>Nguoi Lon</Typography>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  columnGap={1}
                >
                  <IconButton
                    onClick={() => handleCountPerson("nguoi_lon", "decrease")}
                  >
                    <RemoveCircleIcon color="primary" />
                  </IconButton>
                  <Typography>{booking.nguoi_lon}</Typography>
                  <IconButton
                    onClick={() => handleCountPerson("nguoi_lon", "increase")}
                  >
                    <AddCircleIcon color="primary" />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack flexDirection={"column"} alignItems={"center"}>
                <Typography color={"black"}>Tre Em</Typography>
                <Stack
                  flexDirection={"row"}
                  alignItems={"center"}
                  columnGap={1}
                >
                  <IconButton
                    onClick={() => handleCountPerson("tre_em", "decrease")}
                  >
                    <RemoveCircleIcon color="primary" />
                  </IconButton>
                  <Typography>{booking.tre_em}</Typography>
                  <IconButton
                    onClick={() => handleCountPerson("tre_em", "increase")}
                  >
                    <AddCircleIcon color="primary" />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack flexDirection={"column"} alignItems={"start"} rowGap={1}>
                <Typography>So ngay o: {booking.so_dem + 1}</Typography>
                <Typography>So dem: {booking.so_dem}</Typography>
              </Stack>
            </Stack>
            <TableContainer
              variant="outlined"
              component={Paper}
              sx={{ height: "300px" }}
            >
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Loai phong
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      So luong khach
                    </TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>Gia</TableCell>
                    <TableCell sx={{ fontWeight: "bold" }}>
                      Chon phong
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {hotel?.phong?.length > 0 &&
                    hotel?.phong?.map((item) => {
                      if (item.tinh_trang === 1) {
                        return null;
                      }
                      return (
                        <TableRow key={item.so_phong}>
                          <TableCell>
                            <Stack
                              flexDirection={"row"}
                              alignItems={"center"}
                              columnGap={1}
                              marginBottom={1}
                            >
                              <BedIcon />
                              <Typography>{item.loai_phong}</Typography>
                            </Stack>
                            <Typography variant="body2">
                              {item.mo_ta}
                            </Typography>
                          </TableCell>
                          <TableCell>
                            {displayPerson(item.so_luong_khach)}
                          </TableCell>
                          <TableCell>
                            <Typography>
                              {formatNumber(item.gia_phong * booking.so_dem)}{" "}
                              VND
                            </Typography>
                          </TableCell>
                          <TableCell>
                            <Checkbox
                              checked={booking.phong.includes(item.so_phong)}
                              onChange={(e) =>
                                handleChooseRoom(
                                  e,
                                  item.so_phong,
                                  item.gia_phong * booking.so_dem,
                                  item.loai_phong,
                                  item.so_luong_khach
                                )
                              }
                            />
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={handleBooking}
              sx={{ width: "300px", marginTop: 2 }}
              variant="contained"
            >
              xac nhan dat
            </Button>
          </Box>
        </Stack>
      </Stack>
      <Typography color={"black"} marginTop={3} marginBottom={2} variant="h5">
        Danh gia
      </Typography>
      <Stack flexDirection={"row"} alignItems={"end"} columnGap={1}>
        <AccountCircleIcon />
        <TextField
          variant="standard"
          placeholder="Viet danh gia..."
          sx={{ width: "400px" }}
          name="noi_dung_danh_gia"
          value={review.noi_dung_danh_gia}
          onChange={handleChangeInput}
        />
        <TextField
          type="number"
          size="small"
          sx={{ width: "100px" }}
          variant="standard"
          placeholder="Diem"
          name="diem_danh_gia"
          value={review.diem_danh_gia}
          onChange={handleChangeInput}
        />
        <Button onClick={handleReview} size="small" variant="outlined">
          binh luan
        </Button>
      </Stack>
      <Grid container spacing={2} paddingTop={3}>
        {hotel?.danh_gia?.length > 0 ? (
          hotel?.danh_gia?.map((item) => (
            <Grid key={item.ma_danh_gia} item xs={6}>
              <Paper variant="outlined" sx={{ padding: 2 }}>
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
                    <AccountCircleIcon sx={{ fontSize: "30px" }} />
                    <Typography fontWeight={"bold"}>{item.ten}</Typography>
                    <Chip
                      variant="outlined"
                      sx={{
                        fontWeight: "bold",
                        color: "Highlight",
                        borderColor: "Highlight",
                      }}
                      label={item.diem_danh_gia}
                    />
                  </Stack>
                  <Typography variant="body2">
                    {dayjs(item.ngay_danh_gia).format("DD/MM/YYYY")}
                  </Typography>
                </Stack>
                <Typography marginTop={2}>{item.noi_dung_danh_gia}</Typography>
              </Paper>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography>Chua co danh gia nao!</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

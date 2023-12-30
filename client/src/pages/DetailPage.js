import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api, apiImages, displayPerson, formatNumber } from "../utils";
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
} from "@mui/material";
import {
  AddCircleIcon,
  BedIcon,
  FmdGoodOutlinedIcon,
  RemoveCircleIcon,
} from "../icon";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import dayjs from "dayjs";
const { beforeToday } = DateRangePicker;
export default function DetailPage() {
  const navigate = useNavigate();
  const [night, setNight] = useState(1);
  const [countPerson, setCountPerson] = useState({ nguoi_lon: 1, tre_em: 0 });
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`${api}/hotel/${id}`);
        setHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, [id]);
  const handleCountPerson = (field, actions) => {
    switch (actions) {
      case "increase":
        setCountPerson((pre) => ({ ...pre, [field]: countPerson[field] + 1 }));
        return;
      case "decrease":
        if (field === "nguoi_lon" && countPerson[field] === 1) return;
        if (field === "tre_em" && countPerson[field] === 0) return;
        setCountPerson((pre) => ({ ...pre, [field]: countPerson[field] - 1 }));
        return;
      default:
        return;
    }
  };
  const handleChangeDate = (date) => {
    if (!date) return;
    const ngay_nhan = dayjs(date[0]).format("YYYY/MM/DD");
    const ngay_tra = dayjs(date[1]).format("YYYY/MM/DD");
    if (ngay_nhan && ngay_tra) {
      const so_dem = dayjs(ngay_tra).diff(dayjs(ngay_nhan), "day");
      so_dem === 0 ? setNight(1) : setNight(so_dem);
    }
  };
  const handleBooking = () => {
    navigate("/booking/hotel/" + id);
  };
  return (
    <Box>
      <Typography marginBottom={1} variant="h5">
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
            <Typography variant="h6" fontWeight={"bold"}>
              Mo Ta
            </Typography>
            <Typography>{hotel.mo_ta}</Typography>
          </Box>
          <Box>
            <Stack
              flexDirection={"row"}
              marginBottom={2}
              columnGap={5}
              alignItems={"end"}
            >
              <Stack flexDirection={"column"} rowGap={1}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Phong trong
                </Typography>
                <DateRangePicker
                  format="dd/MM/yyyy"
                  placeholder="Ngay Nhan Phong - Ngay Tra Phong"
                  shouldDisableDate={beforeToday()}
                  style={{ width: "400px" }}
                  size="lg"
                  onChange={handleChangeDate}
                />
              </Stack>
              <Stack flexDirection={"column"} alignItems={"center"}>
                <Typography>Nguoi Lon</Typography>
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
                  <Typography>{countPerson.nguoi_lon}</Typography>
                  <IconButton
                    onClick={() => handleCountPerson("nguoi_lon", "increase")}
                  >
                    <AddCircleIcon color="primary" />
                  </IconButton>
                </Stack>
              </Stack>
              <Stack flexDirection={"column"} alignItems={"center"}>
                <Typography>Tre Em</Typography>
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
                  <Typography>{countPerson.tre_em}</Typography>
                  <IconButton
                    onClick={() => handleCountPerson("tre_em", "increase")}
                  >
                    <AddCircleIcon color="primary" />
                  </IconButton>
                </Stack>
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
                    hotel?.phong?.map((item) => (
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
                          <Typography variant="body2">{item.mo_ta}</Typography>
                        </TableCell>
                        <TableCell>
                          {displayPerson(item.so_luong_khach)}
                        </TableCell>
                        <TableCell>
                          <Typography>
                            {formatNumber(item.gia_phong * night)} VND
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Checkbox />
                        </TableCell>
                      </TableRow>
                    ))}
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
    </Box>
  );
}

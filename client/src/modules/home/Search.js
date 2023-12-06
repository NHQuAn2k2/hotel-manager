import React, { useState } from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import KingBedIcon from "@mui/icons-material/KingBed";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import CountSearchHome from "../../components/CountSearchHome";
const borderIconButton = `1px solid ${grey[400]}`;
export default function Search() {
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    rooms: 1,
    adults: 1,
    childs: 0,
  });
  const handleChangeDate = (data, field) => {
    setBooking((pre) => ({ ...pre, [field]: data }));
  };
  const handleIncrease = (field) => {
    setBooking((pre) => ({ ...pre, [field]: booking[field] + 1 }));
  };
  const handleDecrease = (field) => {
    if (field === "rooms" && booking[field] === 1) return;
    if (field === "adults" && booking[field] === 1) return;
    if (field === "childs" && booking[field] === 0) return;
    setBooking((pre) => ({ ...pre, [field]: booking[field] - 1 }));
  };
  const handleSearch = () => {
    console.log(booking);
  };
  return (
    <m.Box marginTop={7}>
      <m.Stack alignItems={"center"} direction={"row"} spacing={12}>
        <m.Box>
          <m.Box sx={{ display: "flex", alignItems: "center" }}>
            <m.TextField
              sx={{ width: 400, marginRight: 2 }}
              id="input-with-icon-textfield"
              label="Địa điểm"
              InputProps={{
                startAdornment: (
                  <m.InputAdornment position="start">
                    <FmdGoodOutlinedIcon color="primary" />
                  </m.InputAdornment>
                ),
              }}
              variant="standard"
            />
            <m.Button onClick={() => handleSearch()} variant="contained">
              tìm khách sạn
            </m.Button>
          </m.Box>
        </m.Box>
        <m.Stack spacing={2} direction={"row"} alignItems={"center"}>
          <m.Typography>Liên hệ với chúng tôi:</m.Typography>
          <m.IconButton sx={{ border: borderIconButton }}>
            <LocalPhoneIcon color="primary" />
          </m.IconButton>
          <m.IconButton sx={{ border: borderIconButton }}>
            <MessageIcon color="primary" />
          </m.IconButton>
        </m.Stack>
        <m.Stack spacing={2} direction={"row"} alignItems={"center"}>
          <m.Typography>Theo dõi chúng tôi:</m.Typography>
          <m.IconButton sx={{ border: borderIconButton }}>
            <FacebookOutlinedIcon color="primary" />
          </m.IconButton>
          <m.IconButton sx={{ border: borderIconButton }}>
            <TwitterIcon color="primary" />
          </m.IconButton>
        </m.Stack>
      </m.Stack>
      <m.Stack
        spacing={4}
        direction={"row"}
        alignItems={"flex-end"}
        marginTop={7}
      >
        <m.Stack direction={"row"} spacing={1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                minDate={dayjs()}
                label="Ngày nhận phòng"
                format="DD/MM/YYYY"
                onChange={(newDate) =>
                  handleChangeDate(
                    `${newDate.$y}/${newDate.$M + 1}/${newDate.$D}`,
                    "checkIn"
                  )
                }
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                minDate={dayjs()}
                label="Ngày trả phòng"
                format="DD/MM/YYYY"
                onChange={(newDate) =>
                  handleChangeDate(
                    `${newDate.$y}/${newDate.$M + 1}/${newDate.$D}`,
                    "checkOut"
                  )
                }
              />
            </DemoContainer>
          </LocalizationProvider>
        </m.Stack>
        <CountSearchHome
          icon={<KingBedIcon color="primary" />}
          label={"Phòng"}
          count={booking.rooms}
          onIncrease={() => handleIncrease("rooms")}
          onDecrease={() => handleDecrease("rooms")}
        />
        <CountSearchHome
          icon={<PermIdentityOutlinedIcon color="primary" />}
          label={"Người lớn"}
          count={booking.adults}
          onIncrease={() => handleIncrease("adults")}
          onDecrease={() => handleDecrease("adults")}
        />
        <CountSearchHome
          icon={<PermIdentityOutlinedIcon color="primary" />}
          label={"Trẻ em"}
          count={booking.childs}
          onIncrease={() => handleIncrease("childs")}
          onDecrease={() => handleDecrease("childs")}
        />
      </m.Stack>
    </m.Box>
  );
}

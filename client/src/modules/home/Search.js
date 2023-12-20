import React, { useContext, useState } from "react";
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
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
const borderIconButton = `1px solid ${grey[400]}`;
export default function Search() {
  const navigate = useNavigate();
  const { setDataSearch } = useContext(SearchContext);
  const [locate, setLocate] = useState("");
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
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/results?search_query_address=${locate}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW4iOiJOZ3V5ZW4gSG9hbmcgUXVhbiIsImlhdCI6MTcwMjg2NTkzMCwiZXhwIjoxNzAyOTUyMzMwfQ.5Tgx0uJQmUC0VUSKvMwlepHpMcxtAG03HnzOVSr180U",
          },
        }
      );
      setDataSearch(res.data);
      navigate(`/search/results/location/${locate}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <m.Box marginTop={7}>
      <m.Stack alignItems={"center"} direction={"row"} spacing={12}>
        <m.Box>
          <m.Box sx={{ display: "flex", alignItems: "end", columnGap: 2 }}>
            <m.Stack flexDirection={"row"} alignItems={"end"} columnGap={1}>
              <FmdGoodOutlinedIcon color="primary" />
              <m.FormControl variant="standard" sx={{ minWidth: 300 }}>
                <m.InputLabel id="locate-select">Địa điểm</m.InputLabel>
                <m.Select
                  labelId="locate-select"
                  id="locate"
                  value={locate}
                  onChange={(e) => setLocate(e.target.value)}
                  label="Age"
                >
                  <m.MenuItem value="">
                    <em>None</em>
                  </m.MenuItem>
                  <m.MenuItem value={"da lat"}>Da Lat</m.MenuItem>
                  <m.MenuItem value={"TP. Ho Chi Minh"}>TP.HCM</m.MenuItem>
                  <m.MenuItem value={"vung tau"}>Vung Tau</m.MenuItem>
                  <m.MenuItem value={"ha noi"}>Ha Noi</m.MenuItem>
                  <m.MenuItem value={"da nang"}>Da Nang</m.MenuItem>
                  <m.MenuItem value={"nha trang"}>Nha Trang</m.MenuItem>
                  <m.MenuItem value={"hoi an"}>Hoi An</m.MenuItem>
                  <m.MenuItem value={"phu quoc"}>Phu Quoc</m.MenuItem>
                  <m.MenuItem value={"sa pa"}>Sa Pa</m.MenuItem>
                  <m.MenuItem value={"hue"}>Hue</m.MenuItem>
                </m.Select>
              </m.FormControl>
            </m.Stack>
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

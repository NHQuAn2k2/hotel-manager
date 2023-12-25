import { Stack } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import React, { useContext } from "react";
import CountSearchHome from "./CountSearchHome";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { BookingContext } from "../context/BookingContext";
export default function Booking() {
  const { booking, setBooking } = useContext(BookingContext);
  const handleChangeDate = (data, field) => {
    setBooking((pre) => ({ ...pre, [field]: data }));
  };
  const handleIncrease = (field) => {
    setBooking((pre) => ({ ...pre, [field]: booking[field] + 1 }));
  };
  const handleDecrease = (field) => {
    if (field === "nguoi_lon" && booking[field] === 1) return;
    if (field === "tre_em" && booking[field] === 0) return;
    setBooking((pre) => ({ ...pre, [field]: booking[field] - 1 }));
  };
  return (
    <Stack spacing={2} direction={"row"} alignItems={"flex-end"}>
      <Stack direction={"row"} spacing={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker
              minDate={dayjs()}
              label="Ngày nhận phòng"
              format="DD/MM/YYYY"
              onChange={(newDate) =>
                handleChangeDate(
                  `${newDate?.$y}/${newDate?.$M + 1}/${newDate?.$D}`,
                  "ngay_nhan"
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
                  `${newDate?.$y}/${newDate?.$M + 1}/${newDate?.$D}`,
                  "ngay_tra"
                )
              }
            />
          </DemoContainer>
        </LocalizationProvider>
      </Stack>
      <CountSearchHome
        icon={<PermIdentityOutlinedIcon color="primary" />}
        label={"Người lớn"}
        count={booking.nguoi_lon}
        onIncrease={() => handleIncrease("nguoi_lon")}
        onDecrease={() => handleDecrease("nguoi_lon")}
      />
      <CountSearchHome
        icon={<PermIdentityOutlinedIcon color="primary" />}
        label={"Trẻ em"}
        count={booking.tre_em}
        onIncrease={() => handleIncrease("tre_em")}
        onDecrease={() => handleDecrease("tre_em")}
      />
    </Stack>
  );
}

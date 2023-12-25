import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { createContext, useState } from "react";
import { token } from "../utils";
export const BookingContext = createContext();
export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    ngay_dat: dayjs().format("YYYY/MM/DD"),
    ngay_nhan: "",
    ngay_tra: "",
    nguoi_lon: 1,
    tre_em: 0,
    so_luong_phong: 0,
    room_ids: [],
    service_ids: [],
    thanh_tien: "",
    ma_khach_hang: token ? jwtDecode(token).ma : "",
  });
  const value = { booking, setBooking };
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

import dayjs from "dayjs";
import { createContext, useState } from "react";
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
    thanh_tien: "",
    ma_khach_hang: "",
  });
  const value = { booking, setBooking };
  return (
    <BookingContext.Provider value={value}>{children}</BookingContext.Provider>
  );
};

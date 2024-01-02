import dayjs from "dayjs";
import { createContext, useEffect, useState } from "react";
export const BookingContext = createContext();
export const getDefaultBookingState = () => ({
  ho: "",
  ten: "",
  email: "",
  so_dien_thoai: "",
  thoi_gian_den: "",
  ngay_nhan: "",
  ngay_tra: "",
  nguoi_lon: 1,
  tre_em: 0,
  yeu_cau_dac_biet: "",
  phong: [],
  tong_tien: 0,
  ngay_dat: dayjs().format("YYYY/MM/DD"),
  phuong_thuc_thanh_toan: "truc tiep",
  ma_nguoi_dung: "",
  so_dem: 1,
  khach_san: "",
  loai_phong: [],
});
export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState(() => {
    const localData = localStorage.getItem("booking");
    return localData ? JSON.parse(localData) : getDefaultBookingState();
  });
  useEffect(() => {
    localStorage.setItem("booking", JSON.stringify(booking));
  }, [booking]);
  return (
    <BookingContext.Provider value={{ booking, setBooking }}>
      {children}
    </BookingContext.Provider>
  );
};

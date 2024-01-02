import React, { useContext, useEffect } from "react";
import {
  BookingContext,
  getDefaultBookingState,
} from "../context/BookingContext";
import { token } from "../utils";
import jwtDecode from "jwt-decode";

export default function RefreshBooking({ children }) {
  const { setBooking } = useContext(BookingContext);
  useEffect(() => {
    setBooking({
      ...getDefaultBookingState(),
      ma_nguoi_dung: token ? jwtDecode(token).ma : "",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <>{children}</>;
}

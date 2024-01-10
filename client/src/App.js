import { Route, Routes, useLocation } from "react-router-dom";
import {
  AdminLoginPage,
  AdminPage,
  BookingPage,
  BookingStatusPage,
  CancelPage,
  ConfirmationPage,
  DetailPage,
  ErrorPage,
  ForgotPasswordPage,
  HomePage,
  ListBookingPage,
  SearchPage,
} from "./pages";
import { Layout } from "./components";
import { useContext, useEffect } from "react";
import { BookingContext } from "./context/BookingContext";
import { getDefaultBookingState } from "./context/BookingContext";
import TestPage from "./pages/TestPage";
import AdminHotelPage from "./pages/admin/AdminHotelPage";
import AdminRoomPage from "./pages/admin/AdminRoomPage";
import AdminDetailHotelPage from "./pages/admin/AdminDetailHotelPage";
import AdminAddHotel from "./pages/admin/AdminAddHotel";
function App() {
  const { setBooking } = useContext(BookingContext);
  const location = useLocation();
  useEffect(() => {
    const paths = [
      "/detail/hotel/",
      "/booking/hotel/",
      "/booking",
      "/confirmation",
    ];
    const pathPassword = ["/forgot/password"];
    const selectedAdmin = ["/admin/hotel", "/admin/room"];
    if (!paths.some((path) => location.pathname.startsWith(path))) {
      setBooking(getDefaultBookingState);
      localStorage.removeItem("total");
      localStorage.removeItem("totalHotel");
    }
    if (!pathPassword.some((path) => location.pathname.startsWith(path))) {
      localStorage.removeItem("passwordStep");
      localStorage.removeItem("dataPassword");
    }
    if (!selectedAdmin.some((path) => location.pathname.startsWith(path))) {
      localStorage.removeItem("selected");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/location/:value" element={<SearchPage />} />
        <Route path="/detail/hotel/:id" element={<DetailPage />} />
        <Route path="/list/booking/user/:id" element={<ListBookingPage />} />
      </Route>
      <Route path="/booking/hotel/:id" element={<BookingPage />} />
      <Route path="/booking" element={<BookingStatusPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="/cancel/booking" element={<CancelPage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/forgot/password" element={<ForgotPasswordPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route element={<AdminPage />}>
        <Route path="/admin/hotel" element={<AdminHotelPage />} />
        <Route path="/admin/hotel/:id" element={<AdminDetailHotelPage />} />
        <Route path="/admin/add/hotel" element={<AdminAddHotel />} />
        <Route path="/admin/room" element={<AdminRoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;

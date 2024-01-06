import { Route, Routes, useLocation } from "react-router-dom";
import {
  BookingPage,
  BookingStatusPage,
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
import { token } from "./utils";
import { getDefaultBookingState } from "./context/BookingContext";
import jwtDecode from "jwt-decode";
import TestPage from "./pages/TestPage";
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
    if (!paths.some((path) => location.pathname.startsWith(path))) {
      setBooking({
        ...getDefaultBookingState(),
        ma_nguoi_dung: token ? jwtDecode(token).ma : "",
      });
    }
    if (!pathPassword.some((path) => location.pathname.startsWith(path))) {
      localStorage.removeItem("passwordStep");
      localStorage.removeItem("dataPassword");
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
      <Route path="*" element={<ErrorPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="/forgot/password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import {
  BookingPage,
  ConfirmationPage,
  DetailPage,
  ErrorPage,
  HomePage,
  SearchPage,
} from "./pages";
import { Layout } from "./components";
import BookingStatusPage from "./pages/BookingStatusPage";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/location/:value" element={<SearchPage />} />
        <Route path="/detail/hotel/:id" element={<DetailPage />} />
      </Route>
      <Route path="/booking/hotel/:id" element={<BookingPage />} />
      <Route path="/booking" element={<BookingStatusPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;

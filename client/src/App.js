import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import CommonLayout from "./components/CommonLayout";
import TestPage from "./pages/TestPage";
import DetailPage from "./pages/DetailPage";
function App() {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/search/results/location/:locate"
          element={<SearchPage />}
        />
        <Route path="/detail/hotel/:id" element={<DetailPage />} />
      </Route>
      <Route path="/test" element={<TestPage />} />
    </Routes>
  );
}

export default App;

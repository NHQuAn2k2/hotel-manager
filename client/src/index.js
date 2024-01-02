import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { SearchProvider } from "./context/SearchContext";
import { AuthProvider } from "./context/AuthContext";
import { BookingProvider } from "./context/BookingContext";
import { InforProvider } from "./context/InforCardContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <AuthProvider>
          <BookingProvider>
            <InforProvider>
              <App />
            </InforProvider>
          </BookingProvider>
        </AuthProvider>
      </SearchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

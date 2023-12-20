import React from "react";
import Header from "../modules/home/Header";
import Search from "../modules/home/Search";
import RegisterEmail from "../modules/home/RegisterEmail";
import * as m from "@mui/material";
import Footer from "../modules/home/Footer";
import { Outlet } from "react-router-dom";
export default function CommonLayout() {
  return (
    <div>
      <Header />
      <Search />
      <m.Box sx={{ marginTop: 4 }}>
        <Outlet />
      </m.Box>
      <m.Divider sx={{ marginBottom: 4, marginTop: 4 }} />
      <RegisterEmail />
      <m.Divider sx={{ marginTop: 4 }} />
      <Footer />
    </div>
  );
}

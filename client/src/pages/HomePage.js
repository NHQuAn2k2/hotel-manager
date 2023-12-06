import React from "react";
import Header from "../modules/home/Header";
import Search from "../modules/home/Search";
import * as m from "@mui/material";
import Popular from "../modules/home/Popular";
import Discount from "../modules/home/Discount";
import Favorite from "../modules/home/Favorite";
import RegisterEmail from "../modules/home/RegisterEmail";
import Footer from "../modules/home/Footer";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Search />
      <m.Grid container spacing={4} marginTop={2}>
        <m.Grid item xs={12}>
          <Discount />
        </m.Grid>
        <m.Grid item xs={12}>
          <Popular />
        </m.Grid>
        <m.Grid item xs={12}>
          <Favorite />
        </m.Grid>
        <m.Grid item xs={12}>
          <m.Divider sx={{ marginBottom: 4 }} />
          <RegisterEmail />
          <m.Divider sx={{ marginTop: 4 }} />
        </m.Grid>
        <m.Grid item xs={12}>
          <Footer />
        </m.Grid>
      </m.Grid>
    </div>
  );
}

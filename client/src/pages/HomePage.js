import React from "react";
import Header from "../modules/home/Header";
import Search from "../modules/home/Search";
import * as m from "@mui/material";
import Popular from "../modules/home/Popular";
import Discount from "../modules/home/Discount";
import Favorite from "../modules/home/Favorite";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Search />
      <m.Grid container marginTop={7} columnSpacing={3}>
        <m.Grid item xs={8}>
          <Popular />
          <Favorite />
        </m.Grid>
        <m.Grid item xs={4}>
          <Discount />
        </m.Grid>
      </m.Grid>
    </div>
  );
}

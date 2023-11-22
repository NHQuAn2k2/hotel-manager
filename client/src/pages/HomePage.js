import React from "react";
import Header from "../modules/home/Header";
import Search from "../modules/home/Search";
import * as m from "@mui/material";
import Popular from "../modules/home/Popular";
export default function HomePage() {
  return (
    <div>
      <Header />
      <Search />
      <m.Grid container marginTop={7}>
        <m.Grid item xs={8}>
          <Popular />
        </m.Grid>
        <m.Grid item xs={4}>
          2
        </m.Grid>
      </m.Grid>
    </div>
  );
}

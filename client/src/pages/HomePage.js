import React from "react";
import * as m from "@mui/material";
import Popular from "../modules/home/Popular";
import Discount from "../modules/home/Discount";
import Favorite from "../modules/home/Favorite";
export default function HomePage() {
  return (
    <div>
      <m.Grid container spacing={4}>
        <m.Grid item xs={12}>
          <Discount />
        </m.Grid>
        <m.Grid item xs={12}>
          <Popular />
        </m.Grid>
        <m.Grid item xs={12}>
          <Favorite />
        </m.Grid>
      </m.Grid>
    </div>
  );
}

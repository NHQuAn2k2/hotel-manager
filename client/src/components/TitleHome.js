import React from "react";
import * as m from "@mui/material";
export default function TitleHome({ title, subTitle }) {
  return (
    <>
      <m.Typography variant="h5" fontWeight={"bold"} gutterBottom>
        {title}
      </m.Typography>
      <m.Typography marginBottom={2}>{subTitle}</m.Typography>
    </>
  );
}

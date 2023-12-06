import React from "react";
import * as m from "@mui/material";

export default function CardDiscountHome({
  title,
  subTitle,
  titleButton,
  img,
}) {
  return (
    <m.Card
      sx={{ display: "flex", justifyContent: "space-between", height: "100%" }}
    >
      <m.Stack justifyContent={"space-between"} direction={"column"}>
        <m.CardContent>
          <m.Typography fontWeight={"bold"} gutterBottom>
            {title}
          </m.Typography>
          <m.Typography variant="subtitle2">{subTitle}</m.Typography>
        </m.CardContent>
        <m.Box sx={{ pl: 2, pb: 2 }}>
          <m.Button size="small" variant="contained">
            {titleButton}
          </m.Button>
        </m.Box>
      </m.Stack>
      <m.CardMedia component={"img"} sx={{ width: 150 }} image={img} alt="" />
    </m.Card>
  );
}

import React from "react";
import * as m from "@mui/material";
export default function CardImgHome({ title, img }) {
  return (
    <m.Paper
      sx={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
    >
      <div style={{ height: 270 }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
          src={img}
        />
      </div>
      <m.Box
        position={"absolute"}
        bottom={0}
        right={0}
        left={0}
        padding={2}
        sx={{ backgroundColor: "rgba(0, 0, 0, 0.54)" }}
      >
        <m.Typography fontWeight={"bold"} color={"white"}>
          {title}
        </m.Typography>
      </m.Box>
    </m.Paper>
  );
}

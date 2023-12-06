import React from "react";
import * as m from "@mui/material";
import styled from "styled-components";
const Img = styled.div`
  height: 270px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
export default function CardPopularHome({ title, img }) {
  return (
    <m.Paper
      sx={{ cursor: "pointer", position: "relative", overflow: "hidden" }}
    >
      <Img>
        <img
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          alt=""
          src={img}
        />
      </Img>
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

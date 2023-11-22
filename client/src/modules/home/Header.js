import React from "react";
import * as m from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
export default function Header() {
  return (
    <m.Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <m.Typography variant="h5" fontWeight={"bold"}>
        Travelers
      </m.Typography>
      <m.Stack direction={"row"} alignItems={"center"} spacing={3}>
        <m.Typography>VND</m.Typography>
        <m.IconButton>
          <HelpOutlineIcon color="primary" />
        </m.IconButton>
        <m.Typography>Đăng chỗ nghỉ của Quý vị</m.Typography>
        <m.Button size="small" variant="contained">
          đăng ký
        </m.Button>
        <m.Button size="small" variant="contained">
          đăng nhập
        </m.Button>
      </m.Stack>
    </m.Box>
  );
}

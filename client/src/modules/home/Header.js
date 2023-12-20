import React, { useState } from "react";
import * as m from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DialogRegister from "./DialogRegister";
import DialogLogin from "./DialogLogin";
export default function Header() {
  const [open, setOpen] = useState({ register: false, login: false });
  const handleOpenDialogRegister = (field) => {
    setOpen((pre) => ({ ...pre, [field]: true }));
  };
  const handleCloseDialogRegister = () => {
    setOpen({ register: false, login: false });
  };
  return (
    <>
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
          <m.Button
            onClick={() => handleOpenDialogRegister("register")}
            size="small"
            variant="contained"
          >
            đăng ký
          </m.Button>
          <m.Button
            onClick={() => handleOpenDialogRegister("login")}
            size="small"
            variant="contained"
          >
            đăng nhập
          </m.Button>
        </m.Stack>
      </m.Box>
      <DialogRegister
        open={open.register}
        onClose={handleCloseDialogRegister}
      />
      <DialogLogin open={open.login} onClose={handleCloseDialogRegister} />
    </>
  );
}

import React, { useContext, useState } from "react";
import * as m from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import DialogRegister from "./DialogRegister";
import DialogLogin from "./DialogLogin";
import { AuthContext } from "../../context/AuthContext";
import Button from "@mui/material/Button";
export default function Header() {
  const { user } = useContext(AuthContext);
  const [open, setOpen] = useState({ register: false, login: false });
  const handleOpenDialog = (field) => {
    setOpen((pre) => ({ ...pre, [field]: true }));
  };
  const handleCloseDialog = () => {
    setOpen({ register: false, login: false });
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
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
          {user === "" ? (
            <>
              <m.Button
                onClick={() => handleOpenDialog("register")}
                size="small"
                variant="contained"
              >
                đăng ký
              </m.Button>
              <m.Button
                onClick={() => handleOpenDialog("login")}
                size="small"
                variant="contained"
              >
                đăng nhập
              </m.Button>
            </>
          ) : (
            <>
              <m.Chip
                sx={{ fontSize: "14px" }}
                size="medium"
                label={`Xin Chao: ${user}`}
                variant="outlined"
              />
              <Button onClick={handleLogout} size="small" variant="contained">
                dang xuat
              </Button>
            </>
          )}
        </m.Stack>
      </m.Box>
      <DialogRegister open={open.register} onClose={handleCloseDialog} />
      <DialogLogin open={open.login} onClose={handleCloseDialog} />
    </>
  );
}

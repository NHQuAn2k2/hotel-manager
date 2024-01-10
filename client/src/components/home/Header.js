import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import DialogRegister from "../DialogRegister";
import DialogLogin from "../DialogLogin";
import { AuthContext } from "../../context/AuthContext";
import { AccountCircleIcon } from "../../icon";
import { BookingContext } from "../../context/BookingContext";
import { token } from "../../utils";
import jwtDecode from "jwt-decode";
export default function Header() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { setBooking } = useContext(BookingContext);
  const [open, setOpen] = useState({ register: false, login: false });
  const handleOpenDialog = (field) => {
    setOpen((pre) => ({ ...pre, [field]: true }));
  };
  const handleCloseDialog = (field) => {
    setOpen((pre) => ({ ...pre, [field]: false }));
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setBooking((pre) => ({ ...pre, ma_nguoi_dung: "" }));
    navigate("/");
    window.location.reload();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
          >
            <Typography fontWeight={"bold"} variant="h5">
              Booking.com
            </Typography>
          </Box>
          <Stack flexDirection={"row"} alignItems={"center"} columnGap={3}>
            <IconButton color="inherit">
              <HelpOutlineOutlinedIcon />
            </IconButton>
            {user === "" ? (
              <>
                <Button
                  onClick={() => handleOpenDialog("register")}
                  color="inherit"
                >
                  dang ky
                </Button>
                <DialogRegister
                  open={open.register}
                  onClose={() => handleCloseDialog("register")}
                />
                <Button
                  onClick={() => handleOpenDialog("login")}
                  color="inherit"
                >
                  dang nhap
                </Button>
                <DialogLogin
                  open={open.login}
                  onClose={() => handleCloseDialog("login")}
                />
              </>
            ) : (
              <>
                <Button
                  onClick={() =>
                    navigate(
                      `/list/booking/user/${token ? jwtDecode(token).ma : ""}`
                    )
                  }
                  color="inherit"
                >
                  dat phong
                </Button>
                <Button onClick={handleLogout} color="inherit">
                  dang xuat
                </Button>
                <Stack flexDirection={"row"} alignItems={"center"}>
                  <IconButton color="inherit">
                    <AccountCircleIcon />
                  </IconButton>
                  <Typography>{user}</Typography>
                </Stack>
              </>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}

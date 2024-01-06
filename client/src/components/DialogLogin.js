import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import { api } from "../utils";
import { BookingContext } from "../context/BookingContext";
import jwtDecode from "jwt-decode";

export default function DialogLogin({ open, onClose = () => {} }) {
  const [login, setLogin] = useState({ email: "", mat_khau: "" });
  const [error, setError] = useState({ message: "" });
  const { setBooking } = useContext(BookingContext);
  const handleChangeInput = (e) => {
    setLogin((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleLogin = async () => {
    try {
      if (login.email === "" || login.mat_khau === "") {
        setError({ message: "ban chua nhap day du thong tin!" });
        return;
      }
      const res = await axios.post(`${api}/login`, login);
      const token = res.data.token;
      localStorage.setItem("token", token);
      setBooking((pre) => ({ ...pre, ma_nguoi_dung: jwtDecode(token).ma }));
      window.location.reload();
      onClose();
    } catch (error) {
      setError(error.response.data);
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dang Nhap</DialogTitle>
      <DialogContent
        sx={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          rowGap: 3,
        }}
      >
        {error.message === "" ? null : (
          <Typography variant="body2" color={"red"}>
            {error.message}
          </Typography>
        )}
        <TextField
          onChange={handleChangeInput}
          variant="standard"
          type="email"
          name="email"
          label="Email"
        />
        <TextField
          onChange={handleChangeInput}
          variant="standard"
          type="password"
          name="mat_khau"
          label="Mat Khau"
        />
        <Link href="/forgot/password">Quen mat khau?</Link>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} size="small" variant="outlined">
          huy bo
        </Button>
        <Button onClick={handleLogin} size="small" variant="contained">
          dang nhap
        </Button>
      </DialogActions>
    </Dialog>
  );
}

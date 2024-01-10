import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import axios from "axios";
import { api } from "../utils";
import jwtDecode from "jwt-decode";
import { BookingContext } from "../context/BookingContext";

export default function DialogRegister({ open, onClose = () => {} }) {
  const { setBooking } = useContext(BookingContext);
  const [register, setRegister] = useState({
    ten: "",
    email: "",
    mat_khau: "",
    so_dien_thoai: "",
  });
  const [error, setError] = useState({ message: "" });
  const handleChangeInput = (e) => {
    setRegister((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleRegister = async () => {
    try {
      if (
        register.ten === "" ||
        register.email === "" ||
        register.mat_khau === "" ||
        register.so_dien_thoai === ""
      ) {
        setError({ message: "ban chua nhap day du thong tin!" });
        return;
      }
      const res = await axios.post(`${api}/register`, register);
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
      <DialogTitle fontWeight={"bold"} color={"Highlight"}>
        Dang Ky Tai Khoan
      </DialogTitle>
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
          type="text"
          placeholder="Ten"
          name="ten"
          variant="outlined"
          fullWidth
        />
        <TextField
          onChange={handleChangeInput}
          type="email"
          placeholder="Email"
          name="email"
          variant="outlined"
          fullWidth
        />
        <TextField
          onChange={handleChangeInput}
          type="password"
          placeholder="Mat Khau"
          name="mat_khau"
          variant="outlined"
          fullWidth
        />
        <TextField
          onChange={handleChangeInput}
          type="number"
          placeholder="So Dien Thoai"
          name="so_dien_thoai"
          variant="outlined"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleRegister} size="small" variant="contained">
          dang ky
        </Button>
      </DialogActions>
    </Dialog>
  );
}

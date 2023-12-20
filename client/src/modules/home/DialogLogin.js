import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DialogContentText, Stack } from "@mui/material";
import axios from "axios";
import { api } from "../../utils";

export default function DialogLogin({ open, onClose = () => {} }) {
  const [data, setData] = useState({ email: "", mat_khau: "" });
  const [error, setError] = useState("");
  const handleOnChangeInput = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleLogin = async () => {
    try {
      const res = await axios.post(`${api}/login`, data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      window.location.reload();
      onClose();
    } catch (error) {
      setError(error.response.data.message);
      return;
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dang Nhap</DialogTitle>
      <DialogContent>
        {error === "" ? (
          ""
        ) : (
          <DialogContentText color={"red"} sx={{ marginBottom: 1 }}>
            {error}
          </DialogContentText>
        )}
        <Stack flexDirection={"column"} rowGap={3} width={"400px"}>
          <TextField
            onChange={handleOnChangeInput}
            name="email"
            fullWidth
            variant="standard"
            label="Email"
            type="email"
          />
          <TextField
            onChange={handleOnChangeInput}
            name="mat_khau"
            fullWidth
            variant="standard"
            label="Mat Khau"
            type="password"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="contained" onClick={handleLogin}>
          dang nhap
        </Button>
      </DialogActions>
    </Dialog>
  );
}

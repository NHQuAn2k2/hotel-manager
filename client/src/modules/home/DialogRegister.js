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
export default function DialogRegister({ open, onClose = () => {} }) {
  const [data, setData] = useState({ ten: "", email: "", mat_khau: "" });
  const [error, setError] = useState("");
  const handleOnChangeInput = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleRegister = async () => {
    try {
      const res = await axios.post(`${api}/register`, data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      onClose();
    } catch (error) {
      setError(error.response.data.message);
      return;
    }
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Dang Ky</DialogTitle>
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
            value={data.ten}
            onChange={handleOnChangeInput}
            name="ten"
            fullWidth
            variant="standard"
            label="Ten"
          />
          <TextField
            value={data.email}
            onChange={handleOnChangeInput}
            name="email"
            fullWidth
            variant="standard"
            type="email"
            label="Email"
          />
          <TextField
            value={data.mat_khau}
            onChange={handleOnChangeInput}
            name="mat_khau"
            type="password"
            fullWidth
            variant="standard"
            label="Mat Khau"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="contained" onClick={handleRegister}>
          dang ky
        </Button>
      </DialogActions>
    </Dialog>
  );
}

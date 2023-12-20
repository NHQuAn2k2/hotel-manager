import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { DialogContentText, Stack } from "@mui/material";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { api, token } from "../../utils";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DialogReview({ open, onClose = () => {} }) {
  let tokenDecode = { ma: "" };
  if (token) {
    tokenDecode = jwtDecode(token);
  }
  const { id } = useParams();
  const [review, setReview] = useState({
    diem_danh_gia: "",
    noi_dung_danh_gia: "",
    ngay_danh_gia: dayjs().format("YYYY-MM-DD"),
    ma_khach_hang: tokenDecode?.ma,
    ma_khach_san: id,
  });
  const [error, setError] = useState({ message: "" });
  const handleReview = async () => {
    if (
      token &&
      (review.noi_dung_danh_gia === "" || review.diem_danh_gia === "")
    ) {
      setError({ message: "Ban chua viet danh gia!" });
      return;
    }
    try {
      await axios.post(`${api}/review/hotel`, review, {
        headers: { Authorization: `Bearer ${token ? token : ""}` },
      });
      window.location.reload();
      onClose();
    } catch (error) {
      setError(error.response.data);
      return;
    }
  };
  const handleChangeInput = (e) => {
    setReview((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Danh Gia</DialogTitle>
      <DialogContent>
        {error.message === "" ? (
          ""
        ) : (
          <DialogContentText color={"red"} marginBottom={1}>
            {error.message}
          </DialogContentText>
        )}
        <Stack width={"400px"} flexDirection={"column"} rowGap={3}>
          <TextField
            onChange={handleChangeInput}
            fullWidth
            variant="standard"
            type="number"
            label="Diem danh gia"
            name="diem_danh_gia"
          />
          <TextField
            onChange={handleChangeInput}
            name="noi_dung_danh_gia"
            fullWidth
            label="Noi dung danh gia"
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" size="small" onClick={onClose}>
          thoat
        </Button>
        <Button onClick={handleReview} variant="contained" size="small">
          danh gia
        </Button>
      </DialogActions>
    </Dialog>
  );
}

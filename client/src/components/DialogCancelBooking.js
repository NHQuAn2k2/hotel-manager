import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import axios from "axios";
import { api, token } from "../utils";
import { useNavigate } from "react-router-dom";
export default function DialogCancelBooking({
  open,
  onClose = () => {},
  id,
  email,
  ten_khach_san,
}) {
  const navigate = useNavigate();
  const handleCancelBooking = async () => {
    try {
      await axios.delete(
        `${api}/booking/${id}/email/${email}/hotel/${ten_khach_san}`,
        {
          headers: { Authorization: `Bearer ${token ? token : ""}` },
        }
      );
      navigate("/cancel/booking");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Dialog open={open}>
      <DialogTitle>Ban co chac muon huy dat phong</DialogTitle>
      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          khong, toi khong muon huy
        </Button>
        <Button onClick={handleCancelBooking} variant="contained">
          co, toi dong y muon huy
        </Button>
      </DialogActions>
    </Dialog>
  );
}

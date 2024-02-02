import React, { useCallback } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import axios from "axios";
import { api, token } from "../utils";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import WarningAmber from "@mui/icons-material/WarningAmber";
export default function DialogCancelBooking({
  open,
  onClose = () => {},
  id,
  email,
  ten_khach_san,
}) {
  const navigate = useNavigate();
  const handleCancelBooking = useCallback(async () => {
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
  }, [email, id, navigate, ten_khach_san]);
  return (
    <Dialog open={open}>
      <DialogTitle display={"flex"} alignItems={"center"} columnGap={1}>
        <WarningAmber color="warning" />
        <Typography variant="h6" color={"Highlight"}>
          Ban co chac muon huy dat phong khong?
        </Typography>
      </DialogTitle>
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

import React, { useContext, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {
  Alert,
  Box,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KingBedIcon from "@mui/icons-material/KingBed";
import { BookingContext } from "../../context/BookingContext";
import dayjs from "dayjs";
import axios from "axios";
import { api, token } from "../../utils";

export default function DialogBooking({ open, onClose = () => {} }) {
  const { booking } = useContext(BookingContext);
  const [toast, setToast] = useState(false);
  const handleCloseToast = (e, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setToast(false);
  };
  const handleBooking = async () => {
    try {
      await axios.post(`${api}/booking`, booking, {
        headers: { Authorization: `Bearer ${token ? token : ""}` },
      });
      setToast(true);
      onClose();
    } catch (error) {
      console.log(error);
      return;
    }
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={toast}
        autoHideDuration={6000}
        onClose={handleCloseToast}
      >
        <Alert
          sx={{ width: "100%" }}
          severity="success"
          onClose={handleCloseToast}
        >
          Dat phong thanh cong!
        </Alert>
      </Snackbar>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Don Dat Phong Cua Ban</DialogTitle>
        <DialogContent sx={{ width: "400px" }}>
          <Stack flexDirection={"column"} spacing={3}>
            <TextField
              defaultValue={dayjs(booking.ngay_nhan).format("DD/MM/YYYY")}
              size="small"
              fullWidth
              inputProps={{ readOnly: true }}
              label="Ngay Nhan Phong"
              variant="standard"
            />
            <TextField
              size="small"
              fullWidth
              defaultValue={dayjs(booking.ngay_tra).format("DD/MM/YYYY")}
              inputProps={{ readOnly: true }}
              label="Ngay Tra Phong"
              variant="standard"
            />
            <TextField
              size="small"
              type="number"
              fullWidth
              defaultValue={booking.nguoi_lon}
              inputProps={{ readOnly: true }}
              label="Nguoi Lon"
              variant="standard"
            />
            <TextField
              size="small"
              type="number"
              fullWidth
              defaultValue={booking.tre_em}
              inputProps={{ readOnly: true }}
              label="Tre Em"
              variant="standard"
            />
            <Box>
              <Typography marginBottom={1}>Dich vu</Typography>
              <Grid container spacing={1}>
                {booking.services.length <= 0 ? (
                  <Grid item xs={12}>
                    <Typography color={"GrayText"} variant="caption">
                      khong co dich vu
                    </Typography>
                  </Grid>
                ) : (
                  booking.services.map((service) => (
                    <Grid key={service.ma_dich_vu} item xs={6}>
                      <Chip
                        variant="outlined"
                        label={`${service.ten_dich_vu} • ${service.gia_dich_vu} VND`}
                      />
                    </Grid>
                  ))
                )}
              </Grid>
            </Box>
            <Box>
              <Typography marginBottom={1}>
                So luong phong • {booking.rooms.length}
              </Typography>
              <List disablePadding>
                {booking.rooms.map((room) => (
                  <ListItem key={room.so_phong}>
                    <ListItemIcon>
                      <KingBedIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText>
                      {room.loai_phong} • {room.gia_phong} VND
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Stack flexDirection={"row"} alignItems={"end"} columnGap={1}>
              <Typography>Tong tien:</Typography>
              <Typography fontWeight={"bold"}>
                {booking.thanh_tien} VND
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button size="small" variant="outlined" onClick={onClose}>
            huy bo
          </Button>
          <Button onClick={handleBooking} size="small" variant="contained">
            xac nhan
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

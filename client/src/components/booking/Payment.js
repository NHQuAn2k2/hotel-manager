import {
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { BookingContext } from "../../context/BookingContext";
import { InforCardContext } from "../../context/InforCardContext";

export default function Payment({ hotel }) {
  const { booking, setBooking } = useContext(BookingContext);
  const { inforCard, setInforCard } = useContext(InforCardContext);
  const handleChangeInforCard = (e) => {
    setInforCard((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  return (
    <Grid item xs={8}>
      <FormControl>
        <RadioGroup
          value={booking.phuong_thuc_thanh_toan}
          onChange={(e) =>
            setBooking((pre) => ({
              ...pre,
              phuong_thuc_thanh_toan: e.target.value,
            }))
          }
        >
          <Paper
            variant="outlined"
            sx={{
              padding: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Typography variant="body1" fontWeight={"bold"}>
                Thanh toan khi nhan phong
              </Typography>
              <Typography variant="caption">
                Thanh toan truc tiep tai khach san.
              </Typography>
            </div>
            <FormControlLabel value={"truc tiep"} control={<Radio />} />
          </Paper>
          <Paper sx={{ padding: 2, marginTop: 2 }} variant="outlined">
            <Stack
              flexDirection={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <div>
                <Typography variant="body1" fontWeight={"bold"}>
                  Thanh toan bang the tin dung
                </Typography>
                <Typography variant="caption">
                  Chi tiet thong tin the tin dung cua ban
                </Typography>
              </div>
              <FormControlLabel value={"online"} control={<Radio />} />
            </Stack>
            <Grid container paddingTop={2} spacing={2}>
              <Grid item xs={6}>
                <TextField
                  disabled={
                    booking.phuong_thuc_thanh_toan === "online" ? false : true
                  }
                  fullWidth
                  name="name"
                  value={inforCard.name}
                  onChange={handleChangeInforCard}
                  variant="filled"
                  label="Ten chu the"
                />
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth variant="filled">
                  <InputLabel>Loai the</InputLabel>
                  <Select
                    disabled={
                      booking.phuong_thuc_thanh_toan === "online" ? false : true
                    }
                    name="type"
                    value={inforCard.type}
                    onChange={handleChangeInforCard}
                  >
                    <MenuItem value="-- Chon --" disabled>
                      -- Chon --
                    </MenuItem>
                    <MenuItem value="Vietcombank">Vietcombank</MenuItem>
                    <MenuItem value="Sacombank">Sacombank</MenuItem>
                    <MenuItem value="ACB">ACB</MenuItem>
                    <MenuItem value="Techcombank">Techcombank</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="number"
                  value={inforCard.number}
                  onChange={handleChangeInforCard}
                  disabled={
                    booking.phuong_thuc_thanh_toan === "online" ? false : true
                  }
                  fullWidth
                  variant="filled"
                  label="So the"
                  type="number"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="expriedDay"
                  value={inforCard.expriedDay}
                  onChange={handleChangeInforCard}
                  disabled={
                    booking.phuong_thuc_thanh_toan === "online" ? false : true
                  }
                  fullWidth
                  variant="filled"
                  label="Ngay het han"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="cvc"
                  value={inforCard.cvc}
                  onChange={handleChangeInforCard}
                  disabled={
                    booking.phuong_thuc_thanh_toan === "online" ? false : true
                  }
                  fullWidth
                  variant="filled"
                  label="Ma so CVC"
                  type="number"
                />
              </Grid>
            </Grid>
          </Paper>
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

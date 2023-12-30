import {
  Chip,
  FormControl,
  Grid,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { InfoOutlinedIcon } from "../../icon";

export default function InforCustomer({ hotel }) {
  const [time, setTime] = useState("");
  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };
  return (
    <Grid item xs={8}>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography marginBottom={2} fontWeight={"bold"} variant="body1">
          Nhap thong tin chi tiet cua ban
        </Typography>
        <Chip
          sx={{ fontSize: "14px" }}
          icon={<InfoOutlinedIcon />}
          variant="outlined"
          label="Gan xong roi! Chi can dien thong tin * bat buoc"
        />
        <Grid container paddingTop={2} spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth variant="filled" label="Ho (tieng Anh) *" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth variant="filled" label="Ten (tieng Anh) *" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="email"
              variant="filled"
              label="Dia chi email *"
              helperText="Email xac nhan dat phong se duoc gui den dia chi nay"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              type="number"
              variant="filled"
              label="Dien thoai (uu tien so DTDD) *"
              helperText="De cho o co the lien he voi ban"
            />
          </Grid>
        </Grid>
      </Paper>
      <Paper variant="outlined" sx={{ padding: 2, marginTop: 2 }}>
        <Typography marginBottom={2} variant="body1" fontWeight={"bold"}>
          Cac yeu cau dac biet
        </Typography>
        <Typography marginBottom={2} variant="body2">
          Cac yeu cau dac biet khong dam bao se duoc dap ung - tuy nhien, cho
          nghi se co gang het suc de thuc hien. Ban luon co the gui yeu cau dac
          biet sau khi hoan tat dat phong cua minh!
        </Typography>
        <Typography marginBottom={1} variant="body2" fontWeight={"bold"}>
          Vui long ghi yeu cau dac biet cua ban tai day. (khong bat buoc)
        </Typography>
        <textarea
          style={{
            maxWidth: "100%",
            minWidth: "100%",
            height: "100px",
            padding: "8px",
            fontSize: "16px",
          }}
        />
      </Paper>
      <Paper variant="outlined" sx={{ padding: 2, marginTop: 2 }}>
        <Typography marginBottom={2} variant="body1" fontWeight={"bold"}>
          Thoi gian den cua ban
        </Typography>
        <Typography marginBottom={2} variant="body2">
          Le tan 24 gio - Luon co tro giup moi khi ban can!
        </Typography>
        <Typography variant="body2" fontWeight={"bold"} marginBottom={1}>
          Them thoi gian den du kien cua ban *
        </Typography>
        <FormControl sx={{ width: "350px" }}>
          <Select value={time} onChange={handleChangeTime} displayEmpty>
            <MenuItem disabled value="">
              Vui long chon
            </MenuItem>
            <MenuItem value="00:00 - 01:00">00:00 - 01:00</MenuItem>
            <MenuItem value="01:00 - 02:00">01:00 - 02:00</MenuItem>
            <MenuItem value="02:00 - 03:00">02:00 - 03:00</MenuItem>
            <MenuItem value="03:00 - 04:00">03:00 - 04:00</MenuItem>
            <MenuItem value="04:00 - 05:00">04:00 - 05:00</MenuItem>
            <MenuItem value="05:00 - 06:00">05:00 - 06:00</MenuItem>
            <MenuItem value="06:00 - 07:00">06:00 - 07:00</MenuItem>
            <MenuItem value="07:00 - 08:00">07:00 - 08:00</MenuItem>
            <MenuItem value="08:00 - 09:00">08:00 - 09:00</MenuItem>
            <MenuItem value="09:00 - 10:00">09:00 - 10:00</MenuItem>
            <MenuItem value="10:00 - 11:00">10:00 - 11:00</MenuItem>
            <MenuItem value="11:00 - 12:00">11:00 - 12:00</MenuItem>
            <MenuItem value="12:00 - 13:00">12:00 - 13:00</MenuItem>
            <MenuItem value="13:00 - 14:00">13:00 - 14:00</MenuItem>
            <MenuItem value="14:00 - 15:00">14:00 - 15:00</MenuItem>
            <MenuItem value="15:00 - 16:00">15:00 - 16:00</MenuItem>
            <MenuItem value="16:00 - 17:00">16:00 - 17:00</MenuItem>
            <MenuItem value="17:00 - 18:00">17:00 - 18:00</MenuItem>
            <MenuItem value="18:00 - 19:00">18:00 - 19:00</MenuItem>
            <MenuItem value="19:00 - 20:00">19:00 - 20:00</MenuItem>
            <MenuItem value="20:00 - 21:00">20:00 - 21:00</MenuItem>
            <MenuItem value="21:00 - 22:00">21:00 - 22:00</MenuItem>
            <MenuItem value="22:00 - 23:00">22:00 - 23:00</MenuItem>
            <MenuItem value="23:00 - 00:00">23:00 - 00:00</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    </Grid>
  );
}

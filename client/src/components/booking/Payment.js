import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function Payment({ hotel }) {
  const [typeCard, setTypeCard] = useState("-- Chon --");
  const handleChangeTypeCard = (e) => {
    setTypeCard(e.target.value);
  };
  return (
    <Grid item xs={8}>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="body1" fontWeight={"bold"}>
          Chi tiet thong tin the tin dung cua ban
        </Typography>
        <Grid container paddingTop={2} spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth variant="filled" label="Ten chu the" />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth variant="filled">
              <InputLabel>Loai the</InputLabel>
              <Select value={typeCard} onChange={handleChangeTypeCard}>
                <MenuItem value="-- Chon --" disabled>
                  -- Chon --
                </MenuItem>
                <MenuItem value="Vietcom Bank">VietCom Bank</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="filled"
              label="So the"
              type="number"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth variant="filled" label="Ngay het han" />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="filled"
              label="Ma so CVC"
              type="number"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

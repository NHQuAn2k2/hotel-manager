import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { FmdGoodOutlinedIcon } from "../../icon";

export default function LayoutBooking({ hotel, component }) {
  return (
    <Grid container sx={{ pt: 4, pb: 1 }} spacing={3}>
      <Grid item xs={4}>
        <Paper sx={{ padding: 2 }} variant="outlined">
          <Typography marginBottom={1} variant="body1" fontWeight={"bold"}>
            {hotel.ten}
          </Typography>
          <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
            <FmdGoodOutlinedIcon color="primary" />
            <Typography color={"Highlight"} variant="body2">
              {hotel.dia_chi}
            </Typography>
          </Stack>
          <Typography marginTop={2}>{hotel.mo_ta}</Typography>
        </Paper>
        <Paper sx={{ marginTop: 2, padding: 2 }} variant="outlined">
          <Typography variant="body1" fontWeight={"bold"}>
            Chi tiet dat phong cua ban
          </Typography>
          <Grid container paddingTop={2} columnGap={2}>
            <Grid item xs>
              <Typography fontWeight={"bold"} gutterBottom variant="body2">
                Nhan phong
              </Typography>
              <Typography variant="body1">
                T7, 30 thang 12 <br /> 2024
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <Typography fontWeight={"bold"} gutterBottom variant="body2">
                Tra phong
              </Typography>
              <Typography variant="body1">
                T7, 30 thang 12 <br /> 2024
              </Typography>
            </Grid>
          </Grid>
          <Typography
            gutterBottom
            marginTop={2}
            variant="body2"
            fontWeight={"bold"}
          >
            Tong thoi gian luu tru:
          </Typography>
          <Typography variant="body1">1 dem</Typography>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <Typography gutterBottom fontWeight={"bold"} variant="body2">
            Ban da chon
          </Typography>
          <Typography variant="body1">
            1 phong cho 2 nguoi lon va 1 tre em
          </Typography>
        </Paper>
        <Paper variant="outlined" sx={{ marginTop: 2 }}>
          <Typography padding={2} variant="body1" fontWeight={"bold"}>
            Tom tat gia
          </Typography>
          <Box sx={{ backgroundColor: "Highlight", padding: 2 }}>
            <Stack
              flexDirection={"row"}
              alignItems={"end"}
              justifyContent={"space-between"}
            >
              <Typography fontWeight={"bold"} color={"white"} variant="h5">
                Gia:
              </Typography>
              <Typography fontWeight={"bold"} color={"white"} variant="h5">
                2,375,000 VND
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      {component}
    </Grid>
  );
}

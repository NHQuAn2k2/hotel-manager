import { Box, Divider, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FmdGoodOutlinedIcon } from "../../icon";
import { BookingContext } from "../../context/BookingContext";
import dayjs from "dayjs";
import { formatNumber } from "../../utils";

export default function LayoutBooking({ hotel, children }) {
  const { booking } = useContext(BookingContext);
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
                {dayjs(booking.ngay_nhan)
                  .locale("vi")
                  .format("dddd, D [thang] M [nam] YYYY")}
              </Typography>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Grid item xs>
              <Typography fontWeight={"bold"} gutterBottom variant="body2">
                Tra phong
              </Typography>
              <Typography variant="body1">
                {dayjs(booking.ngay_tra)
                  .locale("vi")
                  .format("dddd, D [thang] M [nam] YYYY")}
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
          <Typography variant="body1">{booking.so_dem} dem</Typography>
          <Divider style={{ marginTop: 16, marginBottom: 16 }} />
          <Typography gutterBottom fontWeight={"bold"} variant="body2">
            Ban da chon
          </Typography>
          <Typography variant="body1">
            {booking.phong.length} phong cho {booking.nguoi_lon} nguoi lon{" "}
            {booking.tre_em === 0 ? "" : " va " + booking.tre_em + " tre em"}
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
                {formatNumber(booking.tong_tien)} VND
              </Typography>
            </Stack>
          </Box>
        </Paper>
      </Grid>
      {children}
    </Grid>
  );
}

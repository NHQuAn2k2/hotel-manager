import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function PopularHome() {
  return (
    <div>
      <Typography gutterBottom variant="h5" fontWeight={"bold"}>
        Điểm đến đang thịnh hành
      </Typography>
      <Typography marginBottom={2} variant="subtitle1">
        Du khách tìm kiếm về Việt Nam cũng đặt chỗ ở những nơi này
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{ position: "relative", height: "270px" }}>
            <img
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                inset: 0,
              }}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
            <Box>
              <Typography>123</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ position: "relative", height: "270px" }}>
            <img
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                inset: 0,
              }}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ position: "relative", height: "270px" }}>
            <img
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                inset: 0,
              }}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ position: "relative", height: "270px" }}>
            <img
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                inset: 0,
              }}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ position: "relative", height: "270px" }}>
            <img
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                inset: 0,
              }}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

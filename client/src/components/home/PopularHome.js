import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
function TitlePopular({ title }) {
  return (
    <Box position={"inherit"} paddingX={2} paddingY={4}>
      <Typography variant="h5" fontWeight={"bold"} color={"white"}>
        {title} 💕
      </Typography>
    </Box>
  );
}
const cssCard = {
  position: "relative",
  height: "270px",
  cursor: "pointer",
  ":hover": { boxShadow: 10 },
};
const cssCardImg = {
  position: "absolute",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  inset: 0,
};
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
          <Paper sx={cssCard}>
            <img
              style={cssCardImg}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
            <TitlePopular title="Da Lat" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={cssCard}>
            <img
              style={cssCardImg}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
            <TitlePopular title={"TP. Ho Chi Minh"} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={cssCard}>
            <img
              style={cssCardImg}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
            <TitlePopular title={"Da Nang"} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={cssCard}>
            <img
              style={cssCardImg}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
            <TitlePopular title={"Nha Trang"} />
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={cssCard}>
            <img
              style={cssCardImg}
              alt=""
              src="https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o="
            />
            <TitlePopular title={"Hoi An"} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

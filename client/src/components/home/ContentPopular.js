import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function ContentPopular() {
  return (
    <Box>
      <Typography
        marginBottom={2}
        variant="h6"
        fontWeight={"bold"}
        color={"black"}
      >
        Diem Den Dang Thinh Hanh
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Box sx={{ height: "250px" }}>
              <img
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DJI_0550-HDR-Pano.jpg/1200px-DJI_0550-HDR-Pano.jpg"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Box sx={{ height: "250px" }}>
              <img
                alt=""
                src="https://owa.bestprice.vn/images/destinations/uploads/trung-tam-thanh-pho-ha-noi-603da1f235b38.jpg"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Box sx={{ height: "250px" }}>
              <img
                alt=""
                src="https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Box sx={{ height: "250px" }}>
              <img
                alt=""
                src="https://owa.bestprice.vn/images/destinations/uploads/bai-truoc-609ca7036edb7.jpg"
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ overflow: "hidden", borderRadius: 2 }}>
            <Box sx={{ height: "250px" }}>
              <img
                alt=""
                src="https://vcdn1-dulich.vnecdn.net/2022/04/08/dulichPhuQuoc-1649392573-9234-1649405369.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=SU6n3IvJxW1Sla0xqg31Kg"
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

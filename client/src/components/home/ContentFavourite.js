import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import image from "../../asset/hotel.jpg";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

export default function ContentFavourite() {
  return (
    <Box>
      <Typography marginBottom={2} variant="h6" fontWeight={"bold"}>
        Khach San Ua Thich
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper elevation={4} sx={{ overflow: "hidden" }}>
            <Box sx={{ height: "250px" }}>
              <img alt="" src={image} />
            </Box>
            <Box padding={2}>
              <Typography
                fontWeight={"bold"}
                gutterBottom
                // sx={{
                //   width: "300px",
                //   overflow: "hidden",
                //   whiteSpace: "nowrap",
                //   textOverflow: "ellipsis",
                // }}
              >
                Metropole by KT Residences - Infinity Saltwater Pool- Sauna -
                Gym
              </Typography>
              <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
                <FmdGoodOutlinedIcon color="primary" />
                <Typography variant="caption">
                  20 Nguyen Thien Thanh, Quan 2, TP. Ho Chi Minh
                </Typography>
              </Stack>
              <Button
                sx={{ marginTop: 3 }}
                fullWidth
                variant="contained"
                size="small"
              >
                xem chi tiet
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid item xs={3}>
          1
        </Grid>
        <Grid item xs={3}>
          1
        </Grid>
      </Grid>
    </Box>
  );
}

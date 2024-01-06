import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import axios from "axios";
import { api, apiImages } from "../../utils";

export default function ContentFavourite() {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    const getAllHotel = async () => {
      try {
        const res = await axios.get(`${api}/hotel`);
        setHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllHotel();
  }, []);
  return (
    <Box>
      <Typography
        marginBottom={2}
        variant="h6"
        fontWeight={"bold"}
        color={"black"}
      >
        Khach San Ua Thich
      </Typography>
      <Grid container spacing={2}>
        {hotel.length > 0 &&
          hotel.slice(0, 4).map((item) => (
            <Grid key={item.ma_khach_san} item xs={3}>
              <Paper
                variant="outlined"
                sx={{
                  overflow: "hidden",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box sx={{ height: "250px" }}>
                  <img alt="" src={`${apiImages}/${item.hinh_anh}`} />
                </Box>
                <Box padding={2} flex={1}>
                  <Typography fontWeight={"bold"} gutterBottom>
                    {item.ten}
                  </Typography>
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    columnGap={1}
                  >
                    <FmdGoodOutlinedIcon color="primary" />
                    <Typography variant="caption">{item.dia_chi}</Typography>
                  </Stack>
                </Box>
                <Box padding={2}>
                  <Button fullWidth variant="contained" size="small">
                    xem chi tiet
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}

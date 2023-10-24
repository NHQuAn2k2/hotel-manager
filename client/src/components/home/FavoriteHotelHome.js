import { Box, Chip, Paper, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styled from "styled-components";
const SwiperCustom = styled(Swiper)`
  padding: 2px;
`;
export default function FavoriteHotelHome() {
  return (
    <div>
      <Typography gutterBottom variant="h5" fontWeight={"bold"}>
        Nhà ở mà khách yêu thích
      </Typography>
      <SwiperCustom slidesPerView={4} spaceBetween={20}>
        {Array(10)
          .fill(0)
          .map(() => (
            <SwiperSlide>
              <Paper sx={{ borderRadius: "8px", overflow: "hidden" }}>
                <Box height={"210px"}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    alt=""
                    src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o="
                  />
                </Box>
                <Box padding={1}>
                  <Typography variant="body1" fontWeight={"bold"}>
                    Aparthotel Stare Miasto
                  </Typography>
                  <Typography variant="caption">
                    Old Town, Ba Lan, Krakow
                  </Typography>
                  <Box
                    marginTop={1}
                    display={"flex"}
                    alignItems={"center"}
                    columnGap={1}
                  >
                    <Chip size="small" label="8.7" color="primary" />
                    <Typography variant="caption">
                      Tuyệt vời • 2.459 đánh giá
                    </Typography>
                  </Box>
                  <Box textAlign={"right"} marginTop={5}>
                    <Typography variant="caption">
                      Bắt đầu từ{" "}
                      <Typography fontWeight={"bold"}>VND 3.209.665</Typography>
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </SwiperSlide>
          ))}
      </SwiperCustom>
    </div>
  );
}

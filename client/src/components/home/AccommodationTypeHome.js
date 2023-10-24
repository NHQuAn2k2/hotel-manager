import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function AccommodationTypeHome() {
  return (
    <div>
      <Typography gutterBottom variant="h5" fontWeight={"bold"}>
        Tìm theo loại chỗ nghỉ
      </Typography>
      <Swiper slidesPerView={4} spaceBetween={20}>
        {Array(10)
          .fill(0)
          .map(() => (
            <SwiperSlide>
              <Box sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}>
                <Box sx={{ height: "210px" }}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                    alt=""
                    src="https://r-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                  />
                </Box>
                <Typography fontWeight={"bold"}>Khach san</Typography>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

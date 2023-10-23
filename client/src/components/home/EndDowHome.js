import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

export default function EndDowHome() {
  return (
    <div>
      <Typography gutterBottom variant="h5" fontWeight={"bold"}>
        Ưu đãi
      </Typography>
      <Typography marginBottom={2} variant="subtitle1">
        Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn
      </Typography>
      <Box display={"flex"} alignItems={"center"} columnGap={2}>
        <Card
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <CardContent>
              <Typography>Tận hưởng kỳ nghỉ dài nhất của bạn</Typography>
              <Typography>
                Tìm kiếm các chỗ nghỉ cho phép lưu trú dài ngày với giá theo
                tháng ưu đãi.
              </Typography>
            </CardContent>
            <CardActions>123</CardActions>
          </Box>
          <CardMedia
            sx={{ width: "180px" }}
            component={"img"}
            image="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
          />
        </Card>
        <Card sx={{ width: "100%" }}>
          <CardContent>123</CardContent>
          <CardActions>123</CardActions>
        </Card>
      </Box>
    </div>
  );
}

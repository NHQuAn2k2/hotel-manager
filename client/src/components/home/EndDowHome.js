import {
  Box,
  Button,
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
              <Typography gutterBottom fontWeight={"bold"}>
                Tận hưởng kỳ nghỉ dài nhất của bạn
              </Typography>
              <Typography>
                Tìm kiếm các chỗ nghỉ cho phép lưu trú dài ngày với giá theo
                tháng ưu đãi.
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                Tìm chỗ nghỉ
              </Button>
            </CardActions>
          </Box>
          <CardMedia
            sx={{ width: "180px" }}
            component={"img"}
            image="https://q-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o="
          />
        </Card>
        <Card
          sx={{
            width: "100%",
            height: "180px",
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{
              width: "100%",
              height: "100%",
              inset: 0,
              position: "absolute",
            }}
            component={"img"}
            image="https://q-xx.bstatic.com/xdata/images/xphoto/714x300/261387541.jpeg?k=80d1571cedd0a363b9d9b78207914af9b1490c6a859cacd8dc090c866d1bbc94&o="
          />
          <Box position={"inherit"}>
            <CardContent>
              <Typography gutterBottom color={"white"} fontWeight={"bold"}>
                Tiết kiệm 15% với Ưu Đãi Cuối Năm
              </Typography>
              <Typography color={"white"}>
                Khám phá hàng nghìn điểm đến khắp thế <br /> giới và tiết kiệm
                từ 15%
              </Typography>
            </CardContent>
            <CardActions>
              <Button variant="contained" size="small">
                Tìm Ưu Đãi Cuối Năm
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

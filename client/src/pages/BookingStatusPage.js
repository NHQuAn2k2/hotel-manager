import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { DoneIcon, DownloadIcon, UploadIcon } from "../icon";
import { useNavigate } from "react-router-dom";

export default function BookingStatusPage() {
  const navigate = useNavigate();
  const [bookingStatus, setBookingStatus] = useState({
    title: "Dang gui",
    subTitle: "dat phong cua ban toi cho nghi...",
    icon: <UploadIcon sx={{ fontSize: "45px" }} />,
  });

  useEffect(() => {
    const simulateBookingProcess = async () => {
      setBookingStatus({
        title: "Dang gui",
        subTitle: "dat phong cua ban toi cho nghi...",
        icon: <UploadIcon sx={{ fontSize: "45px" }} />,
      });
      await new Promise((resolve) => setTimeout(resolve, 7000));
      setBookingStatus({
        title: "Dang nhan",
        subTitle: "xac nhan tu cho nghi...",
        icon: <DownloadIcon sx={{ fontSize: "45px" }} />,
      });
      await new Promise((resolve) => setTimeout(resolve, 7000));
      setBookingStatus({
        title: "Dang xac nhan",
        subTitle: "dat phong cua ban.",
        icon: <DoneIcon sx={{ fontSize: "45px" }} />,
      });
      await new Promise((resolve) => setTimeout(resolve, 7000));
      navigate("/");
      window.location.reload();
    };
    simulateBookingProcess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      sx={{ backgroundColor: "Highlight" }}
      color={"white"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        {bookingStatus.icon}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
          }}
        >
          <CircularProgress
            size={100}
            sx={{
              color: "white",
            }}
          />
        </Box>
      </Box>
      <Typography marginTop={5} fontSize={"25px"}>
        {bookingStatus.title}
      </Typography>
      <Typography variant="caption">{bookingStatus.subTitle}</Typography>
      <Typography variant="h6" fontWeight={"bold"} marginTop={5}>
        Booking.com
      </Typography>
    </Box>
  );
}

import { Box, Button } from "@mui/material";
import React from "react";
import BedIcon from "@mui/icons-material/Bed";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
export default function GroupButtonHome() {
  const groups = [
    { icon: <BedIcon />, text: "lưu trú" },
    { icon: <AirplanemodeActiveIcon />, text: "chuyến bay" },
    { icon: <DirectionsCarIcon />, text: "thuê xe" },
    { icon: <TravelExploreIcon />, text: "chuyến bay + Khách sạn" },
  ];
  return (
    <Box marginBottom={10} display={"flex"} alignItems={"center"} gap={5}>
      {groups.map((group) => (
        <Button
          key={group.text}
          variant="outlined"
          sx={{
            color: "white",
            borderRadius: "100px",
            borderColor: "white",
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "white",
            },
          }}
          startIcon={group.icon}
        >
          {group.text}
        </Button>
      ))}
    </Box>
  );
}

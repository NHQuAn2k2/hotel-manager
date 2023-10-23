import React from "react";
import {
  Box,
  Button,
  IconButton,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GroupButtonHome from "../components/GroupButtonHome";
export default function HomePage() {
  return (
    <Paper sx={{ paddingX: 20, paddingY: 3, position: "relative" }}>
      <img
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          objectFit: "cover",
        }}
        alt=""
        src="https://www.momondo.ca/himg/f5/50/07/leonardo-5581874-154002374-120388.jpg"
      />
      <Box sx={{ position: "inherit" }}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={5}
        >
          <Link
            href="/"
            sx={{ color: "white", cursor: "pointer" }}
            variant="h5"
            fontWeight={"bold"}
          >
            Booking.com
          </Link>
          <Box display={"flex"} alignItems={"center"} gap={2}>
            <IconButton>
              <HelpOutlineIcon sx={{ color: "white" }} />
            </IconButton>
            <Button
              sx={{
                borderColor: "white",
                color: "white",
                ":hover": { borderColor: "white" },
              }}
              size="small"
              variant="outlined"
            >
              đăng ký
            </Button>
            <Button
              sx={{
                borderColor: "white",
                color: "white",
                ":hover": { borderColor: "white" },
              }}
              size="small"
              variant="outlined"
            >
              đăng nhập
            </Button>
          </Box>
        </Box>
        <GroupButtonHome />
        <Typography
          color={"white"}
          gutterBottom
          fontWeight={"bold"}
          variant="h3"
        >
          Tìm chỗ nghỉ tiếp theo
        </Typography>
        <Typography marginBottom={10} color={"white"} variant="h5">
          Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
        </Typography>
      </Box>
      <Box
        position={"absolute"}
        sx={{
          bottom: 0,
          top: "100%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          placeholder="Bạn muốn đến đâu?"
          variant="outlined"
          focused
          sx={{
            backgroundColor: "white",
            border: "2px solid HighLight",
          }}
        />
      </Box>
    </Paper>
  );
}

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Link,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GroupButtonHome from "../components/home/GroupButtonHome";
import { cities } from "../utils/constant";
import styled from "styled-components";
import EndDowHome from "../components/home/EndDowHome";
const CalendarCustom = styled(Calendar)`
  width: 100%;
  border: none;
`;
export default function HomePage() {
  const [city, setCity] = useState("");
  const handleChange = (event) => {
    setCity(event.target.value);
  };
  return (
    <>
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
                  ":hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderColor: "white",
                  },
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
                  ":hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderColor: "white",
                  },
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
          <Typography marginBottom={5} color={"white"} variant="h5">
            Tìm ưu đãi khách sạn, chỗ nghỉ dạng nhà và nhiều hơn nữa...
          </Typography>
        </Box>
      </Paper>
      <Box sx={{ paddingX: 20, paddingY: 3 }}>
        <Box marginBottom={5}>
          <Grid marginBottom={2} container spacing={3}>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel>chọn khu vực của bạn</InputLabel>
                <Select
                  value={city}
                  onChange={handleChange}
                  label="chọn khu vực của bạn"
                >
                  <MenuItem value={""}>
                    <em>None</em>
                  </MenuItem>
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <Paper
                sx={{
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 2,
                }}
              >
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography>Người lớn:</Typography>
                  <ButtonGroup variant="outlined">
                    <Button>-</Button>
                    <Button>0</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography>Trẻ em:</Typography>
                  <ButtonGroup variant="outlined">
                    <Button>-</Button>
                    <Button>0</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Typography>Phòng:</Typography>
                  <ButtonGroup variant="outlined">
                    <Button>-</Button>
                    <Button>0</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ padding: 2, height: "415px" }}>
                <Typography fontWeight={"bold"} marginBottom={2}>
                  Ngày nhận phòng:
                </Typography>
                <CalendarCustom />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ padding: 2, height: "415px" }}>
                <Typography fontWeight={"bold"} marginBottom={2}>
                  Ngày trả phòng:
                </Typography>
                <CalendarCustom />
              </Paper>
            </Grid>
          </Grid>
          <Button sx={{ width: "20%" }} variant="contained">
            Tìm
          </Button>
        </Box>
        <EndDowHome />
      </Box>
    </>
  );
}

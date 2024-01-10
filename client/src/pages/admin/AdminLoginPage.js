import {
  Box,
  Button,
  Chip,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { api } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function AdminLoginPage() {
  const [data, setData] = useState({ email: "", mat_khau: "" });
  const [error, setError] = useState({ message: "" });
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleLogin = async () => {
    try {
      if (data.email === "" || data.mat_khau === "") {
        setError({ message: "ban chua nhap thong tin!" });
        return;
      }
      const res = await axios.post(`${api}/login`, data);
      const token = res.data.token;
      localStorage.setItem("tokenAdmin", token);
      navigate("/admin/hotel");
      window.location.reload();
    } catch (error) {
      setError(error);
    }
  };
  return (
    <Grid container sx={{ width: "100%", height: "100vh" }}>
      <Grid item xs={6}>
        <Box
          sx={{
            backgroundColor: "Highlight",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
            <Typography fontWeight={"bold"} color={"white"} variant="h4">
              Booking.com
            </Typography>
            <Chip
              label="Admin"
              variant="outlined"
              sx={{ color: "white", borderColor: "white" }}
            />
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack flexDirection={"column"} width={"350px"} rowGap={2}>
            <Typography color={"Highlight"} fontWeight={"bold"} variant="h6">
              Dang nhap tai khoan cua quan ly
            </Typography>
            {error.message === "" ? null : (
              <Typography variant="body2" color={"red"}>
                {error.message}
              </Typography>
            )}
            <TextField
              value={data.email}
              onChange={handleChangeInput}
              name="email"
              placeholder="Email cua quan ly"
            />
            <TextField
              value={data.mat_khau}
              onChange={handleChangeInput}
              name="mat_khau"
              placeholder="Mat khau"
            />
            <Button onClick={handleLogin} variant="contained">
              dang nhap
            </Button>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

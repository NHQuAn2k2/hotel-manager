import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RefreshBooking } from "../components";

export default function ErrorPage() {
  const navigate = useNavigate();
  return (
    <RefreshBooking>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"100vh"}
      >
        <Stack>
          <Typography gutterBottom variant="h4" textAlign={"center"}>
            404 - Not Found
          </Typography>
          <Typography>
            Xin loi, trang ban dang tim kiem khong ton tai.
          </Typography>
          <Button
            onClick={() => {
              navigate("/");
              window.location.reload();
            }}
            variant="contained"
            sx={{ marginTop: 2 }}
          >
            quay ve trang chu
          </Button>
        </Stack>
      </Box>
    </RefreshBooking>
  );
}

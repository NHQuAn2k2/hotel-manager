import React, { useContext } from "react";
import { Layout } from "../components";
import { Paper, Stack, Typography } from "@mui/material";
import { DoneIcon } from "../icon";
import { BookingContext } from "../context/BookingContext";

export default function ConfirmationPage() {
  const { booking } = useContext(BookingContext);
  return (
    <Layout search={false} outlet={false}>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h6" fontWeight={"bold"}>
          Don dat phong cua ban da duoc xac nhan
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={1}
          marginTop={1}
        >
          <DoneIcon color="success" />
          <Typography>
            Chung toi da gui email xac nhan danh cho ban toi{" "}
            <strong>{booking.email}</strong>
          </Typography>
        </Stack>
      </Paper>
    </Layout>
  );
}

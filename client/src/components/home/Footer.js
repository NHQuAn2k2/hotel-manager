import { Box, Divider, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box marginBottom={5}>
      <Divider />
      <Typography marginTop={5} paddingX={5} variant="body2">
        Ban quyen © 1996-2023 Booking.com™. Bao luu moi quyen.
      </Typography>
      <Typography marginTop={5} textAlign={"center"}>
        Booking.com la mot phan cua Booking Holding Inc., tap doan dung dau the
        gioi ve du lich truc tuyen va cac dich vu lien quan.
      </Typography>
    </Box>
  );
}

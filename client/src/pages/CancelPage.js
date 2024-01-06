import React from "react";
import { Layout } from "../components";
import { Paper, Stack, Typography } from "@mui/material";
import { DoneIcon } from "../icon";

export default function CancelPage() {
  return (
    <Layout search={false} outlet={false}>
      <Paper sx={{ padding: 2 }} variant="outlined">
        <Typography variant="h6" fontWeight={"bold"}>
          Ban da huy dat phong thanh cong
        </Typography>
        <Stack
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={1}
          marginTop={1}
        >
          <DoneIcon color="success" />
          <Typography>
            Chung toi da gui email xac nhan huy toi cho ban
          </Typography>
        </Stack>
      </Paper>
    </Layout>
  );
}

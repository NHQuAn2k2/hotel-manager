import React from "react";
import { Footer, Header, Search } from "./home";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <Stack
        flexDirection={"column"}
        rowGap={5}
        marginTop={3}
        paddingX={5}
        paddingBottom={5}
      >
        <Search />
        <Outlet />
      </Stack>
      <Footer />
    </div>
  );
}

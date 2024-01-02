import React from "react";
import { Footer, Header, Search } from "./home";
import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout({ search = true, outlet = true, children }) {
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
        {search && <Search />}
        {outlet && <Outlet />}
        {children}
      </Stack>
      <Footer />
    </div>
  );
}

import {
  AppBar,
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { AccountCircleIcon, ApartmentIcon, BedIcon } from "../../icon";
import { Outlet, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function AdminPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(() => {
    const selected = localStorage.getItem("selected");
    return selected ? Number(selected) : 0;
  });
  useEffect(() => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    if (!tokenAdmin) {
      navigate("/admin/login");
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSelected = (index, field) => {
    switch (field) {
      case "hotel":
        navigate("/admin/hotel");
        break;
      case "room":
        navigate("/admin/room");
        break;
      default:
        break;
    }
    setSelected(index);
  };
  useEffect(() => {
    localStorage.setItem("selected", selected);
  }, [selected]);
  return (
    <Box>
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack flexDirection={"row"} alignItems={"center"} columnGap={1}>
            <Typography variant="h5" fontWeight={"bold"}>
              Booking.com
            </Typography>
            <Chip
              variant="outlined"
              label="Admin"
              sx={{ borderColor: "white", color: "white" }}
            />
          </Stack>
          <Stack flexDirection={"row"} alignItems={"center"} columnGap={3}>
            <Button
              onClick={() => {
                localStorage.removeItem("tokenAdmin");
                navigate("/admin/login");
                window.location.reload();
              }}
              color="inherit"
            >
              dang xuat
            </Button>
            <Stack flexDirection={"row"} alignItems={"center"}>
              <IconButton color="inherit">
                <AccountCircleIcon />
              </IconButton>
              <Typography>
                {localStorage.getItem("tokenAdmin") &&
                  jwtDecode(localStorage.getItem("tokenAdmin")).ten}
              </Typography>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Grid container spacing={3} padding={3}>
        <Grid item xs={3}>
          <Paper variant="outlined">
            <List
              subheader={<ListSubheader>Quan ly</ListSubheader>}
              disablePadding
            >
              <ListItem disablePadding>
                <ListItemButton
                  selected={selected === 0}
                  onClick={() => handleSelected(0, "hotel")}
                >
                  <ListItemIcon>
                    <ApartmentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>Khach san</ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  selected={selected === 1}
                  onClick={() => handleSelected(1, "room")}
                >
                  <ListItemIcon>
                    <BedIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText>Phong</ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs>
          <Outlet />
        </Grid>
      </Grid>
    </Box>
  );
}

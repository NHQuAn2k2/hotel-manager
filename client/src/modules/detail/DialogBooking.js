import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import {
  Box,
  Chip,
  FormControl,
  FormLabel,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import KingBedIcon from "@mui/icons-material/KingBed";

export default function DialogBooking({ open, onClose = () => {} }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Don Dat Phong Cua Ban</DialogTitle>
      <DialogContent sx={{ width: "400px" }}>
        <Stack flexDirection={"column"} spacing={3}>
          <TextField
            size="small"
            fullWidth
            label="Ngay Nhan Phong"
            variant="filled"
          />
          <TextField
            size="small"
            fullWidth
            label="Ngay Tra Phong"
            variant="filled"
          />
          <TextField
            size="small"
            type="number"
            fullWidth
            label="Nguoi Lon"
            variant="filled"
          />
          <TextField
            size="small"
            type="number"
            fullWidth
            label="Tre Em"
            variant="filled"
          />
          <Box>
            <Typography marginBottom={1}>Dich vu</Typography>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Chip variant="outlined" label="An uong" />
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="An uong" />
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="An uong" />
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="An uong" />
              </Grid>
              <Grid item xs={3}>
                <Chip variant="outlined" label="An uong" />
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Typography marginBottom={1}>Phong</Typography>
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <KingBedIcon color="primary" />
                </ListItemIcon>
                <ListItemText>Phong Giuong Doi</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KingBedIcon color="primary" />
                </ListItemIcon>
                <ListItemText>Phong Giuong Doi</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <KingBedIcon color="primary" />
                </ListItemIcon>
                <ListItemText>Phong Giuong Doi</ListItemText>
              </ListItem>
            </List>
          </Box>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button size="small" variant="outlined" onClick={onClose}>
          huy bo
        </Button>
        <Button size="small" variant="contained">
          xac nhan
        </Button>
      </DialogActions>
    </Dialog>
  );
}

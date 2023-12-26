import {
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api, token } from "../utils";
import dayjs from "dayjs";
import KingBedIcon from "@mui/icons-material/KingBed";

export default function BookingPage() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const getBooking = async () => {
      try {
        const res = await axios.get(`${api}/booking/${id}`, {
          headers: { Authorization: `Bearer ${token ? token : ""}` },
        });
        console.log(res.data);
        setData(res.data);
      } catch (error) {
        alert(error);
      }
    };
    getBooking();
  }, [id]);
  return (
    <Stack>
      <Typography marginBottom={1} variant="h5">
        Don Dat Phong Cua Ban
      </Typography>
      <Grid container spacing={2}>
        {data.length > 0 ? (
          data.map((item) => (
            <Grid item xs={6}>
              <Paper sx={{ padding: 2, height: "100%" }}>
                <Stack justifyContent={"space-between"} flexDirection={"row"}>
                  <div>
                    <Typography gutterBottom>Ten Khach San</Typography>
                    <Typography gutterBottom>
                      Ngay Dat: {dayjs(item.ngay_dat).format("DD/MM/YYYY")}
                    </Typography>
                    <Typography gutterBottom>
                      Ngay Nhan: {dayjs(item.ngay_nhan).format("DD/MM/YYYY")}
                    </Typography>
                    <Typography gutterBottom>
                      Ngay Tra: {dayjs(item.ngay_tra).format("DD/MM/YYYY")}
                    </Typography>
                    <Typography gutterBottom>
                      Nguoi Lon: {item.nguoi_lon}
                    </Typography>
                    <Typography gutterBottom>Tre Em: {item.tre_em}</Typography>
                    <Typography gutterBottom fontWeight={"bold"}>
                      Thanh Tien: {item.thanh_tien} VND
                    </Typography>
                    <Button variant="contained" size="small">
                      huy don
                    </Button>
                  </div>
                  <Box width={"350px"}>
                    <Box>
                      <Typography>
                        So Luong Phong: {item.so_luong_phong}
                      </Typography>
                      <List disablePadding>
                        {item.phong.map((item) => (
                          <ListItem key={item.ma_phong}>
                            <ListItemIcon>
                              <KingBedIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText>
                              {item.loai_phong} • {item.gia_phong} VND
                            </ListItemText>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box marginTop={2}>
                      <Typography marginBottom={1}>Dich Vu</Typography>
                      <Grid container spacing={1}>
                        {item.dich_vu.length > 0 ? (
                          item.dich_vu.map((item) => (
                            <Grid key={item.ma_dich_vu} item xs={6}>
                              <Chip
                                variant="outlined"
                                label={`${item.ten_dich_vu} • ${item.gia_dich_vu} VND`}
                              />
                            </Grid>
                          ))
                        ) : (
                          <Grid item xs={12}>
                            <Typography variant="body2" color={"GrayText"}>
                              khong co dich vu
                            </Typography>
                          </Grid>
                        )}
                      </Grid>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography>Khong co don dat phong</Typography>
          </Grid>
        )}
      </Grid>
    </Stack>
  );
}

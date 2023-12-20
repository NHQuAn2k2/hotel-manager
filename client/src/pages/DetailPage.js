import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { api, apiImages } from "../utils";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Grid,
  Paper,
  Avatar,
  Chip,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import dayjs from "dayjs";
import DialogReview from "../modules/review/DialogReview";
export default function DetailPage() {
  const [open, setOpen] = useState(false);
  const handleCloseDialogReview = () => {
    setOpen(false);
  };
  const handleOpenDialogReview = () => {
    setOpen(true);
  };
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  useEffect(() => {
    const handleDetailHotel = async () => {
      try {
        const res = await axios.get(`${api}/hotel/${id}`);
        setHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleDetailHotel();
  }, [id]);
  return (
    <>
      <Stack>
        <Typography variant="h5">{hotel.ten}</Typography>
        <Stack
          sx={{ marginTop: 1 }}
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={1}
        >
          <FmdGoodOutlinedIcon color="primary" />
          <Typography color={"Highlight"} variant="body1">
            {hotel.dia_chi}
          </Typography>
        </Stack>
        <Box sx={{ marginTop: 2, height: "700px" }}>
          <img alt="" src={`${apiImages}/${hotel.hinh_anh}`} />
        </Box>
        <Typography fontWeight={"bold"} sx={{ marginTop: 5 }} variant="h6">
          Mo Ta
        </Typography>
        <Typography sx={{ width: "800px" }}>{hotel.mo_ta}</Typography>
        <Typography fontWeight={"bold"} variant="h6" sx={{ marginTop: 5 }}>
          Danh Sach Phong
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold" }}>Loai phong</TableCell>
                <TableCell sx={{ fontWeight: "bold" }}>Gia phong</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {hotel?.phong?.map((item) => (
                <TableRow key={item.so_phong}>
                  <TableCell>{item.loai_phong}</TableCell>
                  <TableCell>{item.gia_phong}</TableCell>
                  <TableCell>
                    <Button variant="contained" size="small">
                      dat phong
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack
          marginTop={5}
          marginBottom={2}
          flexDirection={"row"}
          alignItems={"center"}
          columnGap={3}
        >
          <Typography variant="h6" fontWeight={"bold"}>
            Danh Gia Cua Khach Hang
          </Typography>
          <Button
            onClick={handleOpenDialogReview}
            variant="outlined"
            size="small"
          >
            viet danh gia
          </Button>
        </Stack>
        <Grid container spacing={3}>
          {hotel?.danh_gia?.length > 0 ? (
            hotel?.danh_gia?.map((item) => (
              <Grid key={item.ma_danh_gia} item xs={4}>
                <Paper sx={{ padding: 2 }}>
                  <Stack
                    flexDirection={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Stack
                      flexDirection={"row"}
                      alignItems={"center"}
                      columnGap={1}
                    >
                      <Avatar sizes="small" />
                      <div>
                        <Typography>{item.ten}</Typography>
                        <Typography variant="caption">
                          {dayjs(item.ngay_danh_gia).format("YYYY-MM-DD")}
                        </Typography>
                      </div>
                    </Stack>
                    <Chip
                      size="medium"
                      variant="outlined"
                      label={`${item.diem_danh_gia}`}
                    />
                  </Stack>
                  <Typography marginTop={2}>
                    {item.noi_dung_danh_gia}
                  </Typography>
                </Paper>
              </Grid>
            ))
          ) : (
            <Grid item xs={4}>
              <Typography>Khong co danh gia nao.</Typography>
            </Grid>
          )}
        </Grid>
      </Stack>
      <DialogReview open={open} onClose={handleCloseDialogReview} />
    </>
  );
}

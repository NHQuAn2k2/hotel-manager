import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils";

export default function AdminDetailHotelPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({
    ma_khach_san: id,
    ten: "",
    image: "",
    dia_chi: "",
    mo_ta: "",
  });
  useEffect(() => {
    const getHotel = async () => {
      try {
        const { data } = await axios.get(`${api}/hotel/${id}`);
        const { hinh_anh, danh_gia, phong, ...rest } = data;
        setHotel(Object.assign({ image: hinh_anh }, rest));
      } catch (error) {
        console.log(error);
      }
    };
    getHotel();
  }, [id]);
  const handleEdit = async () => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    const formData = new FormData();
    formData.append("ten", hotel.ten);
    formData.append("image", hotel.image);
    formData.append("dia_chi", hotel.dia_chi);
    formData.append("mo_ta", hotel.mo_ta);
    formData.append("ma_khach_san", hotel.ma_khach_san);
    try {
      await axios.put(`${api}/hotel`, formData, {
        headers: {
          Authorization: `Bearer ${tokenAdmin}`,
        },
      });
      navigate("/admin/hotel");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const handleChangeInput = (e) => {
    setHotel((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleChangeFile = (e) => {
    setHotel((pre) => ({ ...pre, [e.target.name]: e.target.files[0] }));
  };
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Sua thong tin khach san</Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          value={hotel.ten}
          onChange={handleChangeInput}
          placeholder="Ten khach san"
          name="ten"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          onChange={handleChangeFile}
          placeholder="Hinh anh"
          name="image"
          type="file"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="dia_chi"
          value={hotel.dia_chi}
          onChange={handleChangeInput}
          placeholder="Dia chi"
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="mo_ta"
          value={hotel.mo_ta}
          onChange={handleChangeInput}
          placeholder="Mo ta"
          type=""
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => handleEdit()}
          variant="outlined"
          sx={{ width: "200px" }}
        >
          luu
        </Button>
      </Grid>
    </Grid>
  );
}

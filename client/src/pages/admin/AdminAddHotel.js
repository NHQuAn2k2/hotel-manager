import { Button, Grid, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { api } from "../../utils";
import { useNavigate } from "react-router-dom";

export default function AdminAddHotel() {
  const navigate = useNavigate();
  const [hotel, setHotel] = useState({
    ten: "",
    image: "",
    dia_chi: "",
    mo_ta: "",
  });
  const handleAdd = async () => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    const formData = new FormData();
    formData.append("ten", hotel.ten);
    formData.append("image", hotel.image);
    formData.append("dia_chi", hotel.dia_chi);
    formData.append("mo_ta", hotel.mo_ta);
    try {
      await axios.post(`${api}/hotel`, formData, {
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
        <Typography variant="h6">Them khach san</Typography>
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
          onClick={() => handleAdd()}
          variant="outlined"
          sx={{ width: "200px" }}
        >
          them
        </Button>
      </Grid>
    </Grid>
  );
}

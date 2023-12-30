import React, { useState } from "react";
import * as m from "@mui/material";
import axios from "axios";
import { api, token } from "../utils";
import { useNavigate } from "react-router-dom";
export default function TestPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    ten: "",
    image: "",
    dia_chi: "",
    mo_ta: "",
  });
  const handleChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleChangeFile = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.files[0] }));
  };
  const handleThem = async () => {
    const formData = new FormData();
    formData.append("ten", data.ten);
    formData.append("image", data.image);
    formData.append("dia_chi", data.dia_chi);
    formData.append("mo_ta", data.mo_ta);
    try {
      await axios.post(`${api}/hotel`, formData, {
        headers: {
          Authorization: `Bearer ${token ? token : ""}`,
        },
      });
      navigate("/admin");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <m.Box>
      <m.Typography marginBottom={2} variant="h5">
        Them khach san
      </m.Typography>
      <m.Stack marginBottom={5} flexDirection={"column"} rowGap={3}>
        <m.TextField onChange={handleChange} label="ten" id="name" name="ten" />
        <m.TextField
          onChange={handleChangeFile}
          type="file"
          id="image"
          name="image"
        />
        <m.TextField
          onChange={handleChange}
          label="dia chi"
          id="dia_chi"
          name="dia_chi"
        />
        <m.TextField
          onChange={handleChange}
          label="mo ta"
          id="mo_ta"
          name="mo_ta"
        />
      </m.Stack>
      <m.Typography marginBottom={2} variant="h5">
        Them phong
      </m.Typography>
      <m.Stack marginBottom={5} flexDirection={"column"} rowGap={3}>
        <m.TextField label="loai_phong" id="loai_phong" name="loai_phong" />
        <m.TextField
          // onChange={handleChange}
          type="number"
          label="gia_phong"
          id="gia_phong"
          name="gia_phong"
        />
        <m.TextField
          // onChange={handleChange}
          label="tinh_trang"
          id="tinh_trang"
          name="tinh_trang"
        />
      </m.Stack>
      <m.Button
        fullWidth
        sx={{ marginTop: 2 }}
        onClick={() => handleThem()}
        variant="contained"
      >
        Them
      </m.Button>
    </m.Box>
  );
}

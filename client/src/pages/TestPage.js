import React, { useState } from "react";
import * as m from "@mui/material";
import axios from "axios";
import { api } from "../utils";
export default function TestPage() {
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW4iOiJOZ3V5ZW4gSG9hbmcgUXVhbiIsImlhdCI6MTcwMjg3NDU4NiwiZXhwIjoxNzAyOTYwOTg2fQ.aZl23sfdHJSX-Vr90ajYk5yhsUaiir9Lfp_6VYgTXIc",
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <m.Stack flexDirection={"column"} rowGap={3}>
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
      <m.Button onClick={() => handleThem()} variant="contained">
        Them
      </m.Button>
    </m.Stack>
  );
}

import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import React, { useContext, useState } from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { api } from "../../utils";
import { SearchContext } from "../../context/SearchContext";
export default function Search() {
  const navigate = useNavigate();
  const { setSearch } = useContext(SearchContext);
  const [location, setLocation] = useState("");
  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `${api}/results?search_query_address=${location}`
      );
      setSearch(res.data);
      localStorage.setItem("search-location", location);
      navigate(`/search/location/${location}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack flexDirection={"row"} alignItems={"end"} columnGap={1}>
      <FmdGoodOutlinedIcon color="primary" />
      <FormControl variant="standard" sx={{ minWidth: "250px" }}>
        <InputLabel>Chon Dia Diem</InputLabel>
        <Select
          value={location}
          onChange={handleLocation}
          label="Chon Dia Diem"
        >
          <MenuItem value={""}>none</MenuItem>
          <MenuItem value="tp. ho chi minh">TP.HCM</MenuItem>
          <MenuItem value="da lat">Da Lat</MenuItem>
          <MenuItem value="vung tau">Vung Tau</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleSearch} size="small" variant="contained">
        tim khach san
      </Button>
    </Stack>
  );
}

import React, { useContext, useState } from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import axios from "axios";
import { SearchContext } from "../../context/SearchContext";
import { useNavigate } from "react-router-dom";
const borderIconButton = `1px solid ${grey[400]}`;
export default function Search() {
  const navigate = useNavigate();
  const { setDataSearch } = useContext(SearchContext);
  const [locate, setLocate] = useState("");
  const handleSearch = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/results?search_query_address=${locate}`
      );
      setDataSearch(res.data);
      navigate(`/search/results/location/${locate}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <m.Box marginTop={7}>
      <m.Stack alignItems={"center"} direction={"row"} spacing={12}>
        <m.Box>
          <m.Box sx={{ display: "flex", alignItems: "end", columnGap: 2 }}>
            <m.Stack flexDirection={"row"} alignItems={"end"} columnGap={1}>
              <FmdGoodOutlinedIcon color="primary" />
              <m.FormControl variant="standard" sx={{ minWidth: 300 }}>
                <m.InputLabel id="locate-select">Địa điểm</m.InputLabel>
                <m.Select
                  labelId="locate-select"
                  id="locate"
                  value={locate}
                  onChange={(e) => setLocate(e.target.value)}
                  label="Age"
                >
                  <m.MenuItem value="">
                    <em>None</em>
                  </m.MenuItem>
                  <m.MenuItem value={"da lat"}>Da Lat</m.MenuItem>
                  <m.MenuItem value={"TP. Ho Chi Minh"}>TP.HCM</m.MenuItem>
                  <m.MenuItem value={"vung tau"}>Vung Tau</m.MenuItem>
                  <m.MenuItem value={"ha noi"}>Ha Noi</m.MenuItem>
                  <m.MenuItem value={"da nang"}>Da Nang</m.MenuItem>
                  <m.MenuItem value={"nha trang"}>Nha Trang</m.MenuItem>
                  <m.MenuItem value={"hoi an"}>Hoi An</m.MenuItem>
                  <m.MenuItem value={"phu quoc"}>Phu Quoc</m.MenuItem>
                  <m.MenuItem value={"sa pa"}>Sa Pa</m.MenuItem>
                  <m.MenuItem value={"hue"}>Hue</m.MenuItem>
                </m.Select>
              </m.FormControl>
            </m.Stack>
            <m.Button onClick={() => handleSearch()} variant="contained">
              tìm khách sạn
            </m.Button>
          </m.Box>
        </m.Box>
        <m.Stack spacing={2} direction={"row"} alignItems={"center"}>
          <m.Typography>Liên hệ với chúng tôi:</m.Typography>
          <m.IconButton sx={{ border: borderIconButton }}>
            <LocalPhoneIcon color="primary" />
          </m.IconButton>
          <m.IconButton sx={{ border: borderIconButton }}>
            <MessageIcon color="primary" />
          </m.IconButton>
        </m.Stack>
        <m.Stack spacing={2} direction={"row"} alignItems={"center"}>
          <m.Typography>Theo dõi chúng tôi:</m.Typography>
          <m.IconButton sx={{ border: borderIconButton }}>
            <FacebookOutlinedIcon color="primary" />
          </m.IconButton>
          <m.IconButton sx={{ border: borderIconButton }}>
            <TwitterIcon color="primary" />
          </m.IconButton>
        </m.Stack>
      </m.Stack>
    </m.Box>
  );
}

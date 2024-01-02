import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FmdGoodOutlinedIcon } from "../icon";
import { SearchContext } from "../context/SearchContext";
import { api, apiImages } from "../utils";
import axios from "axios";
import { RefreshBooking } from "../components";
export default function SearchPage() {
  const { value } = useParams();
  const navigate = useNavigate();
  const { search, setSearch } = useContext(SearchContext);
  useEffect(() => {
    const location = localStorage.getItem("search-location");
    const reSearch = async () => {
      try {
        const res = await axios.get(
          `${api}/results?search_query_address=${location}`
        );
        setSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    reSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RefreshBooking>
      <Box>
        <Typography color={"black"} sx={{ marginBottom: 2 }}>
          Ket qua tim kiem cho dia diem: {value.toUpperCase()}
        </Typography>
        <Grid container spacing={2}>
          {search.length > 0 &&
            search.map((item) => (
              <Grid key={item.ma_khach_san} item xs={6}>
                <Paper sx={{ padding: 2, display: "flex", columnGap: 2 }}>
                  <Box width={"200px"} height={"200px"} flexShrink={0}>
                    <img alt="" src={`${apiImages}/${item.hinh_anh}`} />
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"space-between"}
                  >
                    <div>
                      <Typography marginBottom={1} fontWeight={"bold"}>
                        {item.ten}
                      </Typography>
                      <Stack
                        marginBottom={2}
                        alignItems={"center"}
                        flexDirection={"row"}
                        columnGap={1}
                      >
                        <FmdGoodOutlinedIcon color="primary" />
                        <Typography
                          fontWeight={"bold"}
                          color={"Highlight"}
                          variant="body2"
                        >
                          {item.dia_chi}
                        </Typography>
                      </Stack>
                      <Typography
                        sx={{
                          width: "460px",
                          height: "72px",
                          overflow: "auto",
                        }}
                      >
                        {item.mo_ta}
                      </Typography>
                    </div>
                    <Button
                      onClick={() =>
                        navigate("/detail/hotel/" + item.ma_khach_san)
                      }
                      sx={{ width: "200px" }}
                      size="small"
                      variant="contained"
                    >
                      xem chi tiet
                    </Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
        </Grid>
      </Box>
    </RefreshBooking>
  );
}

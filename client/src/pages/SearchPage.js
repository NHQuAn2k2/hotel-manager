import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import { apiImages } from "../utils";

export default function SearchPage() {
  const { dataSearch } = useContext(SearchContext);
  if (dataSearch?.message) {
    return <Typography variant="h5">{dataSearch?.message}.</Typography>;
  } else {
    return (
      <Grid container spacing={3}>
        {dataSearch.length > 0 &&
          dataSearch.map((data) => (
            <Grid key={data.ma_khach_san} item xs={12}>
              <Paper sx={{ display: "flex", padding: 2, columnGap: 3 }}>
                <Box sx={{ width: "250px", height: "250px" }}>
                  <img
                    style={{ borderRadius: "8px" }}
                    alt=""
                    src={`${apiImages}/${data.hinh_anh}`}
                  />
                </Box>
                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="h5">{data.ten}</Typography>
                    <Stack
                      sx={{ marginTop: 1 }}
                      flexDirection={"row"}
                      alignItems={"center"}
                      columnGap={1}
                    >
                      <FmdGoodOutlinedIcon color="primary" />
                      <Typography color={"Highlight"} variant="body1">
                        {data.dia_chi}
                      </Typography>
                    </Stack>
                  </div>
                  <Typography sx={{ width: "800px" }} variant="body2">
                    {data.mo_ta}
                  </Typography>
                  <div>
                    <Typography sx={{ marginBottom: 1 }} variant="h6">
                      Tuyet voi - 8.8
                    </Typography>
                    <Typography variant="body2">1.277 danh gia</Typography>
                  </div>
                  <Button sx={{ width: "200px" }} variant="contained">
                    xem chi tiet
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
      </Grid>
    );
  }
}

import { Box, Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils";
import axios from "axios";
const columns = [
  { field: "id", headerName: "So_phong", width: 100 },
  { field: "loai_phong", headerName: "Loai_phong", width: 100 },
  { field: "gia_phong", headerName: "Gia_phong", width: 100 },
  { field: "mo_ta", headerName: "Mo_ta", width: 100 },
  { field: "so_luong_khach", headerName: "So_luong_khach", width: 100 },
  { field: "tinh_trang", headerName: "Tinh_trang", width: 100 },
  { field: "ten_khach_san", headerName: "Ten_khach_san", width: 100 },
];
export default function AdminRoomPage() {
  const navigate = useNavigate();
  const [room, setRoom] = useState([]);
  useEffect(() => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    const getAllRoom = async () => {
      try {
        const { data } = await axios.get(`${api}/room`, {
          headers: { Authorization: `Bearer ${tokenAdmin}` },
        });
        setRoom(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllRoom();
  }, []);
  return (
    <Stack flexDirection={"column"}>
      <Stack
        flexDirection={"row"}
        alignItems={"end"}
        justifyContent={"space-between"}
        marginBottom={2}
      >
        <Typography variant="h5">Phong</Typography>
        <Button
          onClick={() => navigate("/admin/add/hotel")}
          color="success"
          sx={{ width: "200px" }}
          variant="outlined"
        >
          them
        </Button>
      </Stack>
      <Box width={"100%"} height={"600px"}>
        <DataGrid
          columns={columns}
          rows={[]}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[5, 9, 10]}
        />
      </Box>
    </Stack>
  );
}

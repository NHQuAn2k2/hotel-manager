import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import { api } from "../../utils";
import { useNavigate } from "react-router-dom";
export default function AdminHotelPage() {
  const navigate = useNavigate();
  const handleView = (id) => {
    navigate(`/admin/hotel/${id}`);
  };
  const handleDelete = async (id) => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    try {
      await axios.delete(`${api}/hotel/${id}`, {
        headers: { Authorization: `Bearer ${tokenAdmin}` },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    { field: "id", headerName: "Ma_khach_san", width: 150 },
    { field: "ten", headerName: "Ten_khach_san", width: 200 },
    { field: "hinh_anh", headerName: "Hinh_anh", width: 150 },
    { field: "dia_chi", headerName: "Dia_chi", width: 200 },
    { field: "mo_ta", headerName: "Mo_ta", width: 150 },
    {
      field: "tuy_chinh",
      headerName: "Tuy_chinh",
      width: 200,
      renderCell: (item) => {
        return (
          <Stack flexDirection={"row"} alignItems={"center"} columnGap={2}>
            <Button
              onClick={() => handleView(item.id)}
              variant="outlined"
              size="small"
            >
              sua
            </Button>
            <Button
              onClick={() => handleDelete(item.id)}
              variant="outlined"
              size="small"
              color="error"
            >
              xoa
            </Button>
          </Stack>
        );
      },
    },
  ];
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const tokenAdmin = localStorage.getItem("tokenAdmin");
    const getAllHotel = async () => {
      try {
        const { data } = await axios.get(`${api}/hotel`, {
          headers: { Authorization: `Bearer ${tokenAdmin}` },
        });
        const updateData = data.map((item) => {
          const { ma_khach_san, ...rest } = item;
          return Object.assign({ id: ma_khach_san }, rest);
        });
        setHotels(updateData);
      } catch (error) {
        console.log(error);
      }
    };
    getAllHotel();
  }, []);
  return (
    <Stack flexDirection={"column"}>
      <Stack
        flexDirection={"row"}
        alignItems={"end"}
        justifyContent={"space-between"}
        marginBottom={2}
      >
        <Typography variant="h5">Khach san</Typography>
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
          rows={hotels}
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

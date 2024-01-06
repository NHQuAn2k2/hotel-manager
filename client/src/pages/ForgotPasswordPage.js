import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { api } from "../utils";
import { useNavigate } from "react-router-dom";
const steps = [0, 1, 2];
export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [data, setData] = useState(() => {
    const saveData = JSON.parse(localStorage.getItem("dataPassword"));
    return saveData
      ? saveData
      : {
          email: "",
          resetToken: "",
          ma_nguoi_dung: "",
          mat_khau_moi: "",
          xac_nhan_mat_khau: "",
        };
  });
  const [activeStep, setActiveStep] = useState(() => {
    const savedStep = localStorage.getItem("passwordStep");
    return savedStep ? Number(savedStep) : 0;
  });
  const [error, setError] = useState({ message: "" });
  useEffect(() => {
    localStorage.setItem("passwordStep", activeStep);
  }, [activeStep]);
  useEffect(() => {
    localStorage.setItem("dataPassword", JSON.stringify(data));
  }, [data]);
  const handleChange = (e) => {
    setData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const handleNext = async () => {
    switch (activeStep) {
      case 0:
        try {
          if (data.email === "") {
            alert("ban chua nhap email!");
            return;
          }
          await axios.post(`${api}/code/password`, { email: data.email });
        } catch (error) {
          setError(error.response.data);
          return;
        }
        break;
      case 1:
        try {
          setError({ message: "" });
          if (data.resetToken === "") {
            alert("ban chua nhap ma xac thuc!");
            return;
          }
          const res = await axios.post(`${api}/verify/password`, {
            resetToken: data.resetToken,
          });
          setData((pre) => ({ ...pre, ma_nguoi_dung: res.data.ma_nguoi_dung }));
        } catch (error) {
          setError(error.response.data);
          return;
        }
        break;
      case 2:
        try {
          setError({ message: "" });
          await axios.post(`${api}/reset/password`, {
            ma_nguoi_dung: data.ma_nguoi_dung,
            mat_khau_moi: data.mat_khau_moi,
            xac_nhan_mat_khau: data.xac_nhan_mat_khau,
          });
        } catch (error) {
          setError(error.response.data);
          return;
        }
        break;
      default:
        break;
    }
    if (activeStep === steps.length - 1) {
      navigate("/");
      window.location.reload();
      return;
    }
    setActiveStep((pre) => pre + 1);
  };
  return (
    <Layout search={false} outlet={false}>
      <Stack alignItems={"center"} justifyContent={"center"} rowGap={2}>
        <Box
          width={"400px"}
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          {activeStep === 0 && (
            <>
              <Typography color={"black"} textAlign={"center"}>
                Nhap email tai khoan cua ban de nhan ma xac thuc
              </Typography>
              <TextField
                value={data.email}
                onChange={handleChange}
                type="email"
                name="email"
                label="Nhap email"
                fullWidth
              />
              {error.message === "" ? null : (
                <Typography variant="body2" color={"red"}>
                  {error.message}
                </Typography>
              )}
              <Button onClick={handleNext} fullWidth variant="contained">
                gui ma
              </Button>
            </>
          )}
          {activeStep === 1 && (
            <>
              <Typography color={"black"} textAlign={"center"}>
                Chung toi da gui ma xac thuc toi email cua ban
              </Typography>
              <TextField
                value={data.resetToken}
                onChange={handleChange}
                type="text"
                name="resetToken"
                label="Ma xac thuc"
                fullWidth
              />
              {error.message === "" ? null : (
                <Typography variant="body2" color={"red"}>
                  {error.message}
                </Typography>
              )}
              <Button onClick={handleNext} fullWidth variant="contained">
                xac thuc
              </Button>
            </>
          )}
          {activeStep === 2 && (
            <>
              <Typography color={"black"} textAlign={"center"}>
                Nhap mat khau moi
              </Typography>
              <TextField
                value={data.mat_khau_moi}
                onChange={handleChange}
                type="password"
                name="mat_khau_moi"
                label="Mat khau moi"
                fullWidth
              />
              <TextField
                value={data.xac_nhan_mat_khau}
                onChange={handleChange}
                type="password"
                name="xac_nhan_mat_khau"
                label="Xac nhan mat khau"
                fullWidth
              />
              {error.message === "" ? null : (
                <Typography variant="body2" color={"red"}>
                  {error.message}
                </Typography>
              )}
              <Button onClick={handleNext} fullWidth variant="contained">
                doi mat khau
              </Button>
            </>
          )}
        </Box>
      </Stack>
    </Layout>
  );
}

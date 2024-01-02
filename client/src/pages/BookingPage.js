import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { LockIcon, NavigateNextIcon } from "../icon";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api, token } from "../utils";
import { InforCustomer, LayoutBooking, Payment } from "../components/booking";
import { Layout } from "../components";
import { BookingContext } from "../context/BookingContext";
import { InforCardContext } from "../context/InforCardContext";
const steps = ["Ban chon", "Chi tiet ve ban", "Buoc cuoi cung"];
export default function BookingPage() {
  const navigate = useNavigate();
  const { booking } = useContext(BookingContext);
  const { inforCard } = useContext(InforCardContext);
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [activeStep, setActiveStep] = React.useState(1);
  const handleBooking = async () => {
    try {
      await axios.post(`${api}/booking`, booking, {
        headers: { Authorization: `Bearer ${token ? token : ""}` },
      });
      navigate("/booking");
    } catch (error) {
      console.log(error);
    }
  };
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleBooking();
      return;
    }
    switch (activeStep) {
      case 1:
        if (
          booking.ho === "" ||
          booking.ten === "" ||
          booking.email === "" ||
          booking.so_dien_thoai === "" ||
          booking.thoi_gian_den === ""
        ) {
          alert("vui long nhap thong tin bat buoc!");
          return;
        }
        break;
      case 2:
        if (
          booking.phuong_thuc_thanh_toan === "online" &&
          (inforCard.name === "" ||
            inforCard.number === "" ||
            inforCard.cvc === "" ||
            inforCard.expriedType === "" ||
            inforCard.type === "")
        ) {
          alert("ban chua nhap thong tin the!");
          return;
        }
        break;
      default:
        break;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  useEffect(() => {
    const getDetail = async () => {
      try {
        const res = await axios.get(`${api}/hotel/${id}`);
        setHotel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetail();
  }, [id]);
  return (
    <Layout search={false} outlet={false}>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <React.Fragment>
          {activeStep === 1 && (
            <LayoutBooking hotel={hotel}>
              <InforCustomer />
            </LayoutBooking>
          )}
          {activeStep === 2 && (
            <LayoutBooking hotel={hotel}>
              <Payment />
            </LayoutBooking>
          )}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              startIcon={activeStep === steps.length - 1 ? <LockIcon /> : null}
              endIcon={activeStep === 1 ? <NavigateNextIcon /> : null}
              variant="contained"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1
                ? "dat phong"
                : "tiep theo: chi tiet cuoi cung"}
            </Button>
          </Box>
        </React.Fragment>
      </Box>
    </Layout>
  );
}

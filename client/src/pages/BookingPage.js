import React, { useEffect, useState } from "react";
import { Footer, Header } from "../components/home";
import { Box, Button, Stack, Step, StepLabel, Stepper } from "@mui/material";
import { LockIcon, NavigateNextIcon } from "../icon";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { api } from "../utils";
import { InforCustomer, LayoutBooking, Payment } from "../components/booking";
const steps = ["Ban chon", "Chi tiet ve ban", "Buoc cuoi cung"];
export default function BookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [hotel, setHotel] = useState({});
  const [activeStep, setActiveStep] = React.useState(1);
  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      navigate("/booking");
      return;
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
    <div>
      <Header />
      <Stack
        flexDirection={"column"}
        rowGap={5}
        marginTop={3}
        paddingX={5}
        paddingBottom={5}
      >
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
              <LayoutBooking hotel={hotel} component={<InforCustomer />} />
            )}
            {activeStep === 2 && (
              <LayoutBooking hotel={hotel} component={<Payment />} />
            )}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                startIcon={
                  activeStep === steps.length - 1 ? <LockIcon /> : null
                }
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
      </Stack>
      <Footer />
    </div>
  );
}

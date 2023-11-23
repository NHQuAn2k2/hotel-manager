import React from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MessageIcon from "@mui/icons-material/Message";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import KingBedIcon from "@mui/icons-material/KingBed";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
const borderIconButton = `1px solid ${grey[300]}`;
export default function Search() {
  return (
    <m.Box marginTop={7}>
      <m.Stack alignItems={"center"} direction={"row"} spacing={12}>
        <m.Box>
          <m.Box sx={{ display: "flex", alignItems: "center" }}>
            <m.TextField
              sx={{ width: 400, marginRight: 2 }}
              id="input-with-icon-textfield"
              label="Địa điểm"
              InputProps={{
                startAdornment: (
                  <m.InputAdornment position="start">
                    <FmdGoodOutlinedIcon color="primary" />
                  </m.InputAdornment>
                ),
              }}
              variant="standard"
            />
            <m.Button variant="contained">tìm khách sạn</m.Button>
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
      <m.Stack
        spacing={4}
        direction={"row"}
        alignItems={"flex-end"}
        marginTop={7}
      >
        <m.Stack direction={"row"} spacing={1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                minDate={dayjs()}
                label="Ngày nhận phòng"
                format="DD/MM/YYYY"
              />
            </DemoContainer>
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={["DatePicker"]}>
              <DatePicker
                minDate={dayjs()}
                label="Ngày trả phòng"
                format="DD/MM/YYYY"
              />
            </DemoContainer>
          </LocalizationProvider>
        </m.Stack>
        <m.Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          sx={{ border: borderIconButton, padding: 1, borderRadius: "100px" }}
        >
          <KingBedIcon color="primary" />
          <m.Typography>Phòng - 2</m.Typography>
          <div>
            <m.IconButton size="small">
              <KeyboardArrowDownIcon color="error" />
            </m.IconButton>
            <m.IconButton size="small">
              <KeyboardArrowUpIcon color="primary" />
            </m.IconButton>
          </div>
        </m.Stack>
        <m.Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          sx={{ border: borderIconButton, padding: 1, borderRadius: "100px" }}
        >
          <PermIdentityOutlinedIcon color="primary" />
          <m.Typography>Người lớn - 2</m.Typography>
          <div>
            <m.IconButton size="small">
              <KeyboardArrowDownIcon color="error" />
            </m.IconButton>
            <m.IconButton size="small">
              <KeyboardArrowUpIcon color="primary" />
            </m.IconButton>
          </div>
        </m.Stack>
        <m.Stack
          direction={"row"}
          spacing={1}
          alignItems={"center"}
          sx={{ border: borderIconButton, padding: 1, borderRadius: "100px" }}
        >
          <PermIdentityOutlinedIcon color="primary" />
          <m.Typography>Trẻ em - 2</m.Typography>
          <div>
            <m.IconButton size="small">
              <KeyboardArrowDownIcon color="error" />
            </m.IconButton>
            <m.IconButton size="small">
              <KeyboardArrowUpIcon color="primary" />
            </m.IconButton>
          </div>
        </m.Stack>
      </m.Stack>
    </m.Box>
  );
}

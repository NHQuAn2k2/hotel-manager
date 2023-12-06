import React from "react";
import * as m from "@mui/material";
export default function RegisterEmail() {
  return (
    <m.Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <m.Typography variant="h5" gutterBottom>
        Tiết kiệm thời gian và tiền bạc!
      </m.Typography>
      <m.Typography>
        Hãy đăng ký và chúng tôi sẽ gửi những ưu đãi tốt nhất cho bạn
      </m.Typography>
      <m.Stack
        marginTop={2}
        flexDirection={"row"}
        columnGap={1}
        alignItems={"center"}
      >
        <m.TextField
          sx={{ width: "450px" }}
          placeholder="Địa chỉ e-mail của bạn"
        />
        <m.Button
          sx={{ padding: "14px 22px" }}
          variant="contained"
          size="large"
        >
          đăng ký
        </m.Button>
      </m.Stack>
    </m.Box>
  );
}

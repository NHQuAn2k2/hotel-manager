import React from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import TitleHome from "../../components/TitleHome";
import CardDiscountHome from "../../components/CardDiscountHome";
export default function Discount() {
  return (
    <m.Box>
      <TitleHome
        title={"Ưu đãi"}
        subTitle={"Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn"}
      />
      <m.Stack spacing={2}>
        <CardDiscountHome
          title={"Tạo kỷ niệm khó quên của riêng bạn"}
          subTitle={
            "Đặt vé tham quan tiết kiệm tới 25% với Ưu Đãi Black Friday"
          }
          titleButton={"khám phá ưu đãi"}
          img={
            "https://r-xx.bstatic.com/xdata/images/xphoto/500x500/289365106.jpeg?k=ed4234d8631acfa556b00c64a6e1f5c3e53ed39c679d421d88fcdedaa4e78e1c&o="
          }
        />
        <CardDiscountHome
          title={"Tiết kiệm 15% với Ưu Đãi Cuối Năm"}
          subTitle={
            "Khám phá hàng nghìn điểm đến khắp thế giới và tiết kiệm từ 15%"
          }
          titleButton={"tìm ưu đãi cuối năm"}
          img={
            "https://statics.vinpearl.com/du-lich-trai-nghiem-2_1635322750.jpg"
          }
        />
        <CardDiscountHome
          title={"Làm việc, thư giãn hay cả hai"}
          subTitle={
            "Khám phá các chỗ nghỉ cho phép lưu trú dài ngày với giá theo tháng tiết kiệm hơn"
          }
          titleButton={"tìm chỗ nghỉ"}
          img={
            "https://q-xx.bstatic.com/xdata/images/xphoto/500x500/292129044.jpeg?k=aeb7395c745897697215d617d9fea48166993da4f0c45a425a3d091666a749df&o="
          }
        />
      </m.Stack>
    </m.Box>
  );
}

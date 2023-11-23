import React from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import TitleHome from "../../components/TitleHome";
import CardDiscountHome from "../../components/CardDiscountHome";
export default function Discount() {
  return (
    <m.Box
      sx={{ backgroundColor: grey[100], padding: "30px", borderRadius: 2 }}
    >
      <TitleHome
        title={"Ưu đãi"}
        subTitle={"Khuyến mãi, giảm giá và ưu đãi đặc biệt dành riêng cho bạn"}
      />
      <m.Stack spacing={2}>
        <m.Card sx={{ display: "flex", justifyContent: "space-between" }}>
          <m.Stack direction={"column"}>
            <m.CardContent>
              <m.Typography fontWeight={"bold"} gutterBottom>
                Tạo kỷ niệm khó quên của riêng bạn
              </m.Typography>
              <m.Typography variant="subtitle2">
                Đặt vé tham quan tiết kiệm tới 25% với Ưu Đãi Black Friday
              </m.Typography>
            </m.CardContent>
            <m.Box sx={{ pl: 2, pb: 2 }}>
              <m.Button size="small" variant="contained">
                khám phá ưu đãi
              </m.Button>
            </m.Box>
          </m.Stack>
          <m.CardMedia
            component={"img"}
            sx={{ width: 150 }}
            image="https://r-xx.bstatic.com/xdata/images/xphoto/500x500/289365106.jpeg?k=ed4234d8631acfa556b00c64a6e1f5c3e53ed39c679d421d88fcdedaa4e78e1c&o="
            alt=""
          />
        </m.Card>
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
      </m.Stack>
    </m.Box>
  );
}

import React from "react";
import * as m from "@mui/material";
export default function CardFavoriteHome({
  img,
  title,
  locate,
  point,
  reviewCount,
  price,
}) {
  return (
    <m.Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <m.CardMedia sx={{ height: "250px" }} image={img} />
      <m.CardContent>
        <m.Typography gutterBottom fontWeight={"bold"}>
          {title}
        </m.Typography>
        <m.Typography variant="caption">{locate}</m.Typography>
        <m.Stack
          direction={"row"}
          marginTop={1}
          alignItems={"center"}
          spacing={1}
        >
          <m.Chip
            size="small"
            color="primary"
            sx={{ fontWeight: "bold" }}
            label={point}
          />
          <m.Typography variant="caption">
            Tuyệt hảo • {reviewCount} đánh giá
          </m.Typography>
        </m.Stack>
      </m.CardContent>
      <m.CardActions
        sx={{
          flex: 1,
          justifyContent: "flex-end",
          pr: 2,
          alignItems: "flex-end",
          columnGap: 1,
        }}
      >
        <m.Typography variant="caption">Giá 1 đêm từ</m.Typography>
        <m.Typography fontWeight={"bold"}>VND {price}</m.Typography>
      </m.CardActions>
    </m.Card>
  );
}

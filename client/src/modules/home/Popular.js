import React from "react";
import * as m from "@mui/material";
import { grey } from "@mui/material/colors";
import CardImgHome from "../../components/CardImgHome";
import TitleHome from "../../components/TitleHome";
export default function Popular() {
  return (
    <m.Box>
      <TitleHome
        title={"Điểm đến đang thịnh hành"}
        subTitle={"Các lựa chọn phổ biến nhất cho du khách từ Việt Nam"}
      />
      <m.Grid container spacing={2}>
        <m.Grid item xs={6}>
          <CardImgHome
            title={"TP HCM"}
            img={
              "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTU6MDB1EUpOVx-RbVfAs7ttb3FIwv5BCdsNeUwrCPyOEJIxONWHOPdbxdTUxb_R5zvuBra-235t4fNtR_xeEKod7B6ZdrC7NFMcxF1sQ"
            }
          />
        </m.Grid>
        <m.Grid item xs={6}>
          <CardImgHome
            title={"Ha Noi"}
            img={
              "https://vcdn1-dulich.vnecdn.net/2022/05/11/hoan-kiem-lake-7673-1613972680-1508-1652253984.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=2wB1cBTUcNKuk68nrG6LMQ"
            }
          />
        </m.Grid>
        <m.Grid item xs={4}>
          <CardImgHome
            title={"Da Lat"}
            img={
              "https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675"
            }
          />
        </m.Grid>
        <m.Grid item xs={4}>
          <CardImgHome
            title={"Vung Tau"}
            img={
              "https://lh5.googleusercontent.com/p/AF1QipMbH4fOxgzRwp7raNeGfIBUDmnQu1DW65WjI4fv=w675-h390-n-k-no"
            }
          />
        </m.Grid>
        <m.Grid item xs={4}>
          <CardImgHome
            title={"Da Nang"}
            img={
              "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRfpEbjJ8y_GZd35yZ_J2EenwsaSfsSq6pMLy3FFCXst_GlWS8ZALNbV4j9mquax00sSZLr9jEtkWH1iHGsdGe_2jNLO3CrVft1R-kwXA"
            }
          />
        </m.Grid>
      </m.Grid>
    </m.Box>
  );
}

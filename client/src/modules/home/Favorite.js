import React from "react";
import * as m from "@mui/material";
import TitleHome from "../../components/TitleHome";
import CardFavoriteHome from "../../components/CardFavoriteHome";
export default function Favorite() {
  return (
    <m.Box>
      <TitleHome
        title={"Khách sạn yêu thích"}
        subTitle={"Các khách sạn hàng đầu Việt Nam"}
      />
      <m.Grid container spacing={2}>
        <m.Grid item xs={3}>
          <CardFavoriteHome
            img={
              "https://cf.bstatic.com/xdata/images/hotel/square600/487839750.webp?k=a463bf1bcf3a2ee2f8f009b22f8759df392d96e449be035960973eff13666afc&o="
            }
            title={"Ohio Hotel & Apartment"}
            locate={
              "18A/46, Đường Nguyễn Thị Minh Khai, Phường Dakao, Quận 1, TP Hồ Chí Minh"
            }
            point={"9,2"}
            reviewCount={194}
            price={"375.840"}
          />
        </m.Grid>
        <m.Grid item xs={3}>
          <CardFavoriteHome
            img={
              "https://cf.bstatic.com/xdata/images/hotel/square600/497265219.webp?k=480ea09caa8f9ab496916e80470aec755f2b8ee6620421084f00999e96795581&o="
            }
            title={"Cubicity Hidden House"}
            locate={
              "62/11 Thạch Thị Thanh, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh"
            }
            point={"9,0"}
            reviewCount={42}
            price={"990,000"}
          />
        </m.Grid>
        <m.Grid item xs={3}>
          <CardFavoriteHome
            img={
              "https://cf.bstatic.com/xdata/images/hotel/square600/155737068.webp?k=2edc07f58aa39f1971bbbce3da347b9dcbd916534dccdd8a40846e08fb6f5cfb&o="
            }
            title={"Au Lac Charner Hotel"}
            locate={
              "87-89-91 Đ. Hồ Tùng Mậu, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh"
            }
            point={"9,0"}
            reviewCount={"2.740"}
            price={"2.444.901"}
          />
        </m.Grid>
        <m.Grid item xs={3}>
          <CardFavoriteHome
            img={
              "https://cf.bstatic.com/xdata/images/hotel/square600/116897997.webp?k=7842237e67405f6d71bdd726a429844ec68843c780faa78722a51ed5e85282e5&o="
            }
            title={"The Reverie Saigon"}
            locate={"22-36, Nguyen Hue Boulevard, Quận 1, TP. Hồ Chí Minh"}
            point={"9,4"}
            reviewCount={"275"}
            price={"2.444.901"}
          />
        </m.Grid>
      </m.Grid>
    </m.Box>
  );
}

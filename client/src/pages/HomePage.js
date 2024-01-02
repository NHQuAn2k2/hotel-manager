import React from "react";
import { ContentFavourite, ContentPopular } from "../components/home";
import { RefreshBooking } from "../components";

export default function HomePage() {
  return (
    <>
      <RefreshBooking>
        <ContentPopular />
        <ContentFavourite />
      </RefreshBooking>
    </>
  );
}

import React from "react";
import { ContentFavourite, ContentPopular } from "../components/home";

export default function HomePage() {
  return (
    <>
      <ContentPopular />
      <ContentFavourite />
    </>
  );
}

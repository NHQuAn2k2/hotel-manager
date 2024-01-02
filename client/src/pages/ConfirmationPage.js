import React from "react";
import { Layout, RefreshBooking } from "../components";

export default function ConfirmationPage() {
  return (
    <RefreshBooking>
      <Layout search={false} outlet={false}>
        ConfirmationPage
      </Layout>
    </RefreshBooking>
  );
}

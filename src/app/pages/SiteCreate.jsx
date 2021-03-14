import React from "react";
import SiteForm from "../components/forms/SiteForm";
import Header from "../components/Header";
import Page from "../components/Page";

export default function SiteCreate() {
  return (
    <Page>
      <Header title="Create New Site" subTitle="" />

      <SiteForm />
    </Page>
  );
}

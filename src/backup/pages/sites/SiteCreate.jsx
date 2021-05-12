import React from "react";

import SiteForm from "../../components/forms/SiteForm";
import Header from "../../components/Header";
import Page from "../../components/Page";

export default function SiteCreate() {
  return (
    <Page back>
      <Header title="Create New Site" subTitle="" center />

      <SiteForm />
    </Page>
  );
}

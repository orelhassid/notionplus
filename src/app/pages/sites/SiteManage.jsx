import React from "react";
import { useParams } from "react-router";

import SiteManageForm from "../../components/forms/SiteManageForm";
import Header from "../../components/Header";
import Page from "../../components/Page";
import useSites from "../../hooks/useSites";

export default function SiteManage() {
  const { slug } = useParams();
  const { sites, isReady } = useSites();
  const site = sites.find((s) => s.slug === slug);

  return (
    <Page isReady={isReady}>
      <Header title={`Manage '${site?.title}'`} subTitle="" center />
      <SiteManageForm site={site} />
    </Page>
  );
}

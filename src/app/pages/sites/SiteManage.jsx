import React, { useEffect } from "react";
import { useParams } from "react-router";

import Tabs from "../../components/Navigation/Tabs";
import SiteManageForm from "../../components/forms/SiteManageForm";
import Header from "../../components/Header";
import Page from "../../components/Page";
import useSites from "../../hooks/useSites";
import { Typography } from "@material-ui/core";
import SiteWorkerPanel from "./SiteWorkerPanel";

export default function SiteManage() {
  const { slug } = useParams();
  const { sites, isReady, currentSite } = useSites(slug);

  const tabs = [
    {
      panel: <SiteManageForm site={currentSite} />,
      label: "Settings",
    },
    {
      panel: <SiteWorkerPanel />,
      label: "Worker",
    },
    {
      panel: <Typography>Access</Typography>,
      label: "Access",
    },
  ];

  return (
    <Page isReady={isReady} back>
      <Header title={`Manage '${currentSite?.title}'`} subTitle="" center />
      <Tabs tabs={tabs} />
    </Page>
  );
}

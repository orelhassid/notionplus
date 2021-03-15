import React from "react";
import { Fade, Grid } from "@material-ui/core";

import useSites from "../../hooks/useSites";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Page from "../../components/Page";
import SiteCard from "../../components/SiteCard";
import { SITES_CREATE_RT } from "../../config/routes";

export default function SitesPage() {
  const { sites, deleteSite, isReady } = useSites();

  return (
    <Page isReady={isReady}>
      <Header title="My Sites" subTitle="View and manage your Notion sites" />
      <Grid container spacing={2} style={{ margin: "0 20px" }}>
        <Grid item xs={12}>
          <Button label="New Site" to={SITES_CREATE_RT} />
        </Grid>
        {sites.map((site) => (
          <Grid item key={site._id}>
            <Fade in>
              <SiteCard site={site} onDelete={deleteSite} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

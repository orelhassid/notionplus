import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import siteApi from "../api/site";
import Button from "../components/Button";
import Header from "../components/Header";
import Page from "../components/Page";
import SiteCard from "../components/SiteCard";
import { SITES_CREATE_RT } from "../config/routes";

export default function SitesPage() {
  const [sites, setSites] = useState([]);
  const getSites = async () => {
    try {
      const { data } = await siteApi.getSites();
      setSites(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getSites();
  }, []);
  return (
    <Page>
      <Header title="My Sites" subTitle="View and manage your Notion sites" />
      <Grid container spacing={2} style={{ margin: "0 20px" }}>
        <Grid item xs={12}>
          <Button label="New Site" to={SITES_CREATE_RT} />
        </Grid>
        {sites.map((site) => (
          <Grid item key={site._id}>
            <SiteCard title={site.title} description={site.description} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

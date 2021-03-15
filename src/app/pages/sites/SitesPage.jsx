import React from "react";
import { Fade, Grid, makeStyles } from "@material-ui/core";

import useSites from "../../hooks/useSites";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Page from "../../components/Page";
import SiteCard from "../../components/SiteCard";
import { SITES_CREATE_RT } from "../../config/routes";

const useStyles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      justifyContent: "center",
    },
  },
}));

export default function SitesPage() {
  const { sites, deleteSite, isReady } = useSites();
  const classes = useStyles();

  return (
    <Page isReady={isReady}>
      <Header title="My Sites" subTitle="View and manage your Notion sites" />
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Button label="New Site" to={SITES_CREATE_RT} />
        </Grid>
        {sites.map((site) => (
          <Grid item key={site._id} xs={12}>
            <Fade in>
              <SiteCard site={site} onDelete={deleteSite} />
            </Fade>
          </Grid>
        ))}
      </Grid>
    </Page>
  );
}

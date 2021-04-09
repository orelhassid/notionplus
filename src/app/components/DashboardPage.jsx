import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import useDevice from "../hooks/useDevice";
import DashboardDrawer from "./Navigation/DashboardDrawer";
import Navigation from "./Navigation/Navigation";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
  },
  drawer: {
    width: 250,
  },
  content: {
    flexGrow: 1,
  },
}));
export default function DashboardPage({ children }) {
  const classes = useStyles();
  const { isMobile } = useDevice();

  return (
    <>
      <Navigation />

      <Grid container className={classes.container}>
        {!isMobile && (
          <Grid item className={classes.drawer}>
            <DashboardDrawer />
          </Grid>
        )}
        <Grid item className={classes.content}>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

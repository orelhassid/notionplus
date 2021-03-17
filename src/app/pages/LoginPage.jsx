import React, { useEffect } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";

import LoginForm from "../components/forms/LoginForm";
import Header from "../components/Header";
import Page from "../components/Page";
import useAuth from "../hooks/useAuth";
import useAlert from "../hooks/useAlert";
import Layout from "../components/Layout";
import BackgroundImage from "../components/BackgroundImage";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    height: "100%",
    // alignItems: "center",
    "&> *": {
      height: "100%",
      alignSelf: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  boxContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
  },
}));

export default function LoginPage() {
  const { user } = useAuth();
  const alert = useAlert();
  const classes = useStyles();

  useEffect(() => {
    alert.setAlert({
      message: "Login Success!",
      button: {
        label: "Refresh",
        onClick: () => console.log("Refresh The Page"),
      },
    });
  }, []);
  return (
    <Page>
      {/* <Layout fullHeight> */}
      <Box className={classes.boxContainer}>
        <Box flexGrow={1}>
          <Header
            title="WELCOME TO NOTION PLUS"
            subTitle="Making beatiful websites builded with Notion"
            center
          />
          <LoginForm />
        </Box>
        <Box height="100%" flexGrow={1}>
          <BackgroundImage imageSrc="/images/home-cover.svg" />
        </Box>
      </Box>
      {/* </Layout> */}
    </Page>
  );
}

{
  /* <Grid container className={classes.gridContainer}> */
}
{
  /* <Grid item xs={12}> */
}
{
  /* <Typography
      variant="subtitle1"
      style={{ textAlign: "center", opacity: 0.8 }}
    >
      Currently only Google Authentication is supported.
    </Typography> */
}
{
  /* </Grid> */
}
{
  /* <Grid item xs={12} sm={6}>
  <Header
    title="WELCOME TO NOTION PLUS"
    subTitle="Making beatiful websites builded with Notion"
    center
  />
  <LoginForm />
</Grid>
<Grid item xs={12} sm={6}>
  <BackgroundImage imageSrc="/images/home-cover.svg" />
</Grid>
</Grid> */
}

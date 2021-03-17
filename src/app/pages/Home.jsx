import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";

import { ReactComponent as HomeCover } from "../assets/images/home-cover.svg";
import { ReactComponent as WorkerIcon } from "../assets/icons/worker.svg";
import { ReactComponent as CustomizeIcon } from "../assets/icons/customize.svg";
import { Box, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import Button from "../components/Button";
import { LOGIN_RT, SITES_RT } from "../config/routes";
import useAuth from "../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  headerContainer: {
    display: "flex",
    // minHeight: "50vh",
    height: "80vh",
    flexWrap: "wrap",
    marginBottom: theme.spacing(10),
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },

  headerText: {
    display: "flex",
    flexDirection: "column",
    // flexGrow: 1,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    "& > *": {
      marginBottom: 4,
    },
  },
  headerTitle: {
    fontSize: 70,
    [theme.breakpoints.down("sm")]: {
      fontSize: 50,
    },
  },
  headerActions: {
    "& > *": {
      marginRight: 2,
      marginLeft: 2,
    },
  },
  headerImage: {
    maxWidth: 600,
    // flexGrow: 3,
    width: "100%",
  },
  cardsContainer: {
    maxWidth: 960,
    margin: "0 auto",
    justifyContent: "center",
  },
}));
export default function Home() {
  const classes = useStyles();
  const { status } = useAuth();
  return (
    <Page>
      {/* <Header
        title="Notion Plus"
        subTitle="Managing Notion Websites"
        center
        pb={1}
      /> */}
      <Box className={classes.headerContainer}>
        <Box className={classes.headerText} p={5}>
          <Typography variant="h1" className={classes.headerTitle}>
            Notion Plus
          </Typography>
          <Typography variant="subtitle1">Managing Notion Websites</Typography>
          <Box className={classes.headerActions}>
            {status.isLogin ? (
              <Button label="My Sites" to={SITES_RT} />
            ) : (
              <Button label="Sign Up" to={LOGIN_RT} />
            )}
          </Box>
        </Box>

        <Box className={classes.headerImage}>
          <HomeCover />
        </Box>
      </Box>
      <Box textAlign="center">
        <Typography variant="h2">How It Works?</Typography>
        <Grid container spacing={2} className={classes.cardsContainer}>
          <Grid item xs={12} sm={4}>
            <SimpleCard
              Icon={WorkerIcon}
              title="Cloudflare Worker"
              description="Workers allows you manipulate URL requests to your website. This let you change the URL, inject some code for styling and scripts."
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <SimpleCard
              Icon={CustomizeIcon}
              title="Customization"
              description="After generating the worker script you can modify and customize your sites with ease"
            />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
}

const SimpleCard = ({ title, description, Icon }) => (
  <Paper style={{ height: "100%" }}>
    <Box p={2}>
      <Icon width="50%" />
      <Typography variant="h3">{title}</Typography>
      <Typography variant="subtitle2">{description}</Typography>
    </Box>
  </Paper>
);

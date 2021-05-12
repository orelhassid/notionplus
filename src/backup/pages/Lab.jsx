import { Box, Hidden, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import useDevice from "../hooks/useDevice";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100%",
    flexWrap: "wrap",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    order: 1,
  },
  sidebar: {
    order: 2,
    background: "#f2d184",
    color: "#866118",
    width: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
  sidebarHeader: {
    padding: theme.spacing(4),
  },
  artwork: {
    minHeight: "70%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  artworkImage: {
    maxHeight: "70%",
    width: "100%",
    flex: 1,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom center",
    backgroundSize: "cover",
  },
}));
export default function Lab() {
  return (
    <Layout
      content={<h1>Content Here</h1>}
      sidebar={{
        imageUrl: "/images/home-cover.svg",
        title: "Welcome Back!",
      }}
    ></Layout>
  );
}

const Layout = ({ content, sidebar }) => {
  const classes = useStyles();
  const { isMobile } = useDevice();
  return (
    <Box className={classes.container}>
      <Hidden smDown>
        <Box component="section" className={classes.sidebar} display>
          <Box component="header" className={classes.sidebarHeader}>
            <Typography variant="h1" component="h1">
              {sidebar.title}
            </Typography>
          </Box>
          <Box className={classes.artwork}>
            <Box
              className={classes.artworkImage}
              style={{ backgroundImage: `url(${sidebar.imageUrl})` }}
            />
          </Box>
        </Box>
      </Hidden>

      <Box component="section" className={classes.content}>
        {content}
      </Box>
    </Box>
  );
};

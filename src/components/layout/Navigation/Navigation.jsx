import React from "react";
import { APP } from "../../../config";
import { NAVIGATION } from "../../../theme/config";

import { Box, useMediaQuery, useTheme } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Drawer from "./Drawer/Drawer";
import NavBar from "./NavBar/NavBar";

import useStyles from "./styles";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";

export default function Navigation() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const Brand = () => (
    <Box display="flex" alignItems="center" className={classes.logo}>
      <LogoIcon width="25px" style={{ minWidth: "25px" }} />
      <Typography variant="body1" className={classes.title} noWrap>
        {APP.title}
      </Typography>
    </Box>
  );

  return (
    <AppBar
      position="sticky"
      className={classes.navigation}
      component="nav"
      elevation={NAVIGATION.elevation}
    >
      <Toolbar>
        <Brand />
        {isMobile ? <Drawer /> : <NavBar />}
      </Toolbar>
    </AppBar>
  );
}

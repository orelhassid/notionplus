import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, useMediaQuery } from "@material-ui/core";

import Drawer from "./Drawer";
import Button from "../Button";
import app from "../../config/app";
import navigation from "../../config/navigation";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import useAuth from "../../hooks/useAuth";
// import ButtonIcon from "../ButtonIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoContainer: {
    color: "#fff",
    fill: "#fff",
  },
  logoIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  const { user, status } = useAuth();

  const links = navigation.getLinks(user, status);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          flexGrow={1}
          className={classes.logoContainer}
        >
          <Logo fill="inherit" className={classes.logoIcon} />
          <Typography variant="h6" className={classes.title}>
            {app.name}
          </Typography>
        </Box>
        {isMobile ? (
          <Drawer />
        ) : (
          links.map(
            (item) =>
              !item.hide && (
                <Button
                  color="inherit"
                  textColor="#fff"
                  to={item.to}
                  label={item.label}
                  variant="text"
                  key={item.to}
                  Icon={item.icon}
                />
              )
          )
        )}
      </Toolbar>
    </AppBar>
  );
}

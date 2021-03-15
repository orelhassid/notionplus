import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, useMediaQuery, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Drawer from "./Drawer";
import Button from "../Button";
import app from "../../config/app";
import navigation from "../../config/navigation";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import useAuth from "../../hooks/useAuth";
import { useHistory } from "react-router";
// import ButtonIcon from "../ButtonIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "#fff",
    fill: "#fff",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logoContainer: {
    color: "inherit",
    fill: "inherit",
  },
  logoIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function Navigation({ back }) {
  const classes = useStyles();
  const history = useHistory();
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
          <Box>
            {back && (
              <IconButton color="inherit" onClick={() => history.goBack()}>
                <ArrowBackIcon color="inherit" />
              </IconButton>
            )}

            <Drawer />
          </Box>
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

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import navigation from "../../config/navigation";
import { IconButton } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    "& > span": {
      color: "#fff",
    },
  },
});

export default function Drawer() {
  const classes = useStyles();
  const [anchor, setAnchor] = useState("right");
  const [open, setOpen] = useState(false);
  const { user, status } = useAuth();

  const links = navigation.getLinks(user, status);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {links.map(
          ({ label, to, icon, hide }) =>
            !hide && (
              <ListItem button key={label} component={RouterLink} to={to}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            )
        )}
      </List>
      <Divider />
    </div>
  );

  return (
    <React.Fragment>
      <IconButton
        onClick={toggleDrawer(anchor, true)}
        edge="start"
        className={classes.menuButton}
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon color="inherit" />
      </IconButton>

      <MUIDrawer
        anchor={anchor}
        open={open}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </MUIDrawer>
    </React.Fragment>
  );
}

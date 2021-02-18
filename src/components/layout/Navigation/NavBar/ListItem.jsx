import {
  ListItem as MUIListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import useStyles from "../styles";

export default function ListItem({ item, toggleDrawer, children, ...rest }) {
  const { label, to, href, disabled, icon, onClick, preventClose, skip } = item;

  const classes = useStyles();

  const handleClick = (e) => {
    if (toggleDrawer) {
      !preventClose && toggleDrawer(false, e);
    }
    onClick && onClick();
  };

  const { pathname } = useLocation();

  return (
    <>
      {!skip ? (
        <MUIListItem
          classes={{ root: classes.listItem }}
          button
          dense
          selected={pathname === to}
          component={to ? NavLink : "a"}
          to={to}
          href={href}
          onClick={handleClick}
          onKeyDown={handleClick}
          disabled={disabled || false}
        >
          {icon && (
            <ListItemIcon classes={{ root: classes.listItemIcon }}>
              {icon}
            </ListItemIcon>
          )}
          <ListItemText primary={label} className={classes.listItemText} />
        </MUIListItem>
      ) : null}
    </>
  );
}

ListItem.defaultProps = {
  item: {
    label: "Default Name",
  },
};

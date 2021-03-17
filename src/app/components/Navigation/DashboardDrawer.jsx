import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { Box } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { AccountCircle } from "@material-ui/icons";
import navigation from "../../config/navigation";
import useAuth from "../../hooks/useAuth";
import { isEmpty } from "../../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    borderRight: `1.5px solid ${theme.palette.grey[200]}`,
    height: "100%",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function DashboardDrawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState("");
  const { user, status } = useAuth();

  const linkList = navigation.getLinks(user, status);

  const handleClick = (name) => {
    if (name === open) setOpen("");
    else setOpen(name);
  };

  const list = [
    {
      label: "Home",
      to: "/",
      icon: <InboxIcon />,
      nested: false,
    },
    {
      label: "Site",
      icon: <InboxIcon />,

      onClick: () => handleClick("Site"),
      nested: [
        {
          label: "Settings",
          to: "/site/settings",
        },
      ],
    },
    {
      label: "Account",
      icon: <AccountCircle />,
      onClick: () => handleClick("Account"),
      nested: [
        {
          label: "Settings",
          to: "/account/settings",
        },
      ],
    },
  ];

  const Item = ({ item, isNested }) => {
    const { label, to, icon, onClick, nested } = item;
    return (
      <ListItem
        button
        key={label}
        component={RouterLink}
        to={to || window.location.pathname}
        onClick={onClick}
        className={isNested ? classes.nested : ""}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {nested ? open === label ? <ExpandLess /> : <ExpandMore /> : null}
      </ListItem>
    );
  };

  const ItemNested = ({ item }) => {
    return (
      <React.Fragment>
        <Item item={item} />
        <Collapse in={open === item.label} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.nested.map((item, index) => (
              <Item key={index} item={item} isNested />
            ))}
          </List>
        </Collapse>
      </React.Fragment>
    );
  };

  return (
    <Box>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Home
          </ListSubheader>
        }
        className={classes.root}
      >
        {list.map((item, index) => {
          return isEmpty(item.nested) ? (
            <Item key={index} item={item} />
          ) : (
            <ItemNested key={index} item={item} />
          );
        })}
      </List>
    </Box>
  );
}

import React, { useContext } from "react";
import ListItem from "./ListItem";
import List from "./List";
import { getCommonLinks } from "./navigationLinks";
import useStyles from "../styles";
import { UserContext } from "../../../../contexts/UserContext";

export default function NavBar({ toggleDrawer }) {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  const links = getCommonLinks(user);

  return (
    <List classes={{ root: classes.list }}>
      {links.map((item) => (
        <ListItem key={item.label} item={item} toggleDrawer={toggleDrawer} />
      ))}
    </List>
  );
}

import React from "react";
import { Drawer as MUIDrawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";

import NavBar from "../NavBar/NavBar";
import useStyles from "../styles";

export default function Drawer() {
  const classes = useStyles();
  const anchor = "right";
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open, event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <IconButton
        classes={{ label: classes.drawerButton }}
        onClick={(e) => toggleDrawer(true, e)}
      >
        <MenuIcon />
      </IconButton>
      <MUIDrawer
        anchor={anchor}
        open={open}
        classes={{ root: classes.drawer }}
        onClose={(e) => toggleDrawer(false, e)}
      >
        <NavBar toggleDrawer={toggleDrawer} />
        {/* <Box className={{ root: classes.list }} component="nav">      </Box> */}
      </MUIDrawer>
    </>
  );
}

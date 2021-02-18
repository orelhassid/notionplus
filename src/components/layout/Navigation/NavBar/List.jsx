import { Hidden, List as MUIList, ListSubheader } from "@material-ui/core";
import React from "react";
import useStyles from "../styles";

export default function List({ label, children }) {
  const classes = useStyles();

  return (
    <>
      <MUIList
        classes={{ root: classes.list }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <Hidden smUp>
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              disableSticky
            >
              {label}
            </ListSubheader>
          </Hidden>
        }
      >
        {children}
      </MUIList>
    </>
  );
}

import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
  },
}));
export default function Layout({ children, fullHeight, ...rest }) {
  const classes = useStyles();

  return (
    <Box
      className={classes.container}
      {...rest}
      style={{
        height: "100%",
      }}
    >
      {children}
    </Box>
  );
}

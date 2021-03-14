import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    padding: "60px",
  },
}));
export default function Header({ title, subTitle, center }) {
  const classes = useStyles();
  return (
    <Box
      className={classes.header}
      component="header"
      textAlign={center && "center"}
    >
      <Typography variant="h1" component="h1">
        {title}
      </Typography>
      <Typography variant="subtitle1" component="p">
        {subTitle}
      </Typography>
    </Box>
  );
}

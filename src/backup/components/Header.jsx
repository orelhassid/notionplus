import {
  Box,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  header: {
    [theme.breakpoints.up("sm")]: {
      // padding: theme.spacing(5),
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      textAlign: "center",
    },
  },
}));
export default function Header({ title, subTitle, center, ...rest }) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box
      className={classes.header}
      component="header"
      textAlign={center && "center"}
      p={5}
      {...rest}
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

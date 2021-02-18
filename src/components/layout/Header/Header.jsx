import { Box, Typography } from "@material-ui/core";
import React from "react";
import { ALIGN } from "../../../theme/config";
import useStyles from "./styles";

export default function Header({ title, subtitle, direction }) {
  const classes = useStyles();

  return (
    <Box component="header" classes={{ root: classes.container }}>
      <Box textAlign={direction || ALIGN}>
        <Typography
          variant="h1"
          component="h1"
          classes={{ root: classes.title }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle1" classes={{ root: classes.subtitle }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
}

Header.defaultProps = {};

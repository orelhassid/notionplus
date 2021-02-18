import React from "react";
import { Button as MUIButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: "bold",
    letterSpacing: "0.75px",
  },
  containedPrimary: {
    color: theme.palette.background.default,
  },
  textSecondary: {
    color: theme.palette.text.secondary,
    "&:hover": {
      background: "none",
    },
  },
}));

export default function Button({
  variant,
  color,
  textColor,
  icon,
  children,
  to,
  ...rest
}) {
  const classes = useStyles();
  const theme = useTheme();
  //   component={Link}
  return (
    <MUIButton
      disableFocusRipple
      disableRipple
      component={to ? RouterLink : "button"}
      to={to}
      startIcon={icon || null}
      classes={classes}
      variant={variant}
      color={color}
      {...rest}
    >
      {children}
    </MUIButton>
  );
}

Button.defaultProps = {
  color: "primary",
  variant: "contained",
};

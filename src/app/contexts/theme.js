import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "../config/theme";

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

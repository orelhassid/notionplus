import { MuiThemeProvider } from "@material-ui/core";
import React from "react";
import theme from "./theme";

export default function ThemeProvider({ children }) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}

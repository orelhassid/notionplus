import { createMuiTheme } from "@material-ui/core/styles";
import {
  PRIMARY,
  BORDER_RADIUS,
  FONTS,
  TEXT_PRIMARY,
  TEXT_SECONDARY,
} from "./config";
import { Font, FONT_MEDIUM } from "./fonts";

const theme = createMuiTheme({
  typography: {
    fontFamily: FONTS.join(","),

    h1: {
      fontSize: "3.5rem",
      fontWeight: 500,
      fontFamily: "CustomFontMedium",
      padding: 0,
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      lineHeight: "23px",
      letterSpacing: "0.15px",
    },
    label: {
      color: TEXT_PRIMARY,
    },
    body2: {
      textTransform: "capitalize",
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: "700",
      lineHeight: "16px",
      letterSpacing: "0.75px",
      textAlign: "left",
    },
  },
  shape: {
    borderRadius: BORDER_RADIUS,
  },

  palette: {
    text: {
      primary: TEXT_PRIMARY,
      secondary: TEXT_SECONDARY,
    },
    primary: {
      main: PRIMARY,
    },
    danger: {
      main: "red",
    },

    secondary: {
      main: "#19857b",
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    // ".InputBase-input": {
    //   backgroundColor: BG_INPUT,
    // },

    MuiCssBaseline: {
      "@global": {
        "html, body": {
          minHeight: "100%",
          height: "fit-content",
          // fontFamily: FON,
        },
        "@font-face": [Font],
        "@font-face": [FONT_MEDIUM],
        body: {},
      },
    },
  },
});

export default theme;

// input:-webkit-autofill,
// input:-webkit-autofill:hover,
// input:-webkit-autofill:focus,

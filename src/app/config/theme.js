import { createMuiTheme } from "@material-ui/core/styles";

import RubikRegular from "../assets/fonts/Rubik/Rubik-VariableFont_wght.ttf";

const Font = {
  fontFamily: "Rubik",
  fontStyle: "normal",
  fontDisplay: "swap",

  src: `url(${RubikRegular}) format('woff2')`,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const FONTS = [
  "Rubik",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];

const theme = createMuiTheme({
  typography: {
    fontFamily: FONTS.join(","),

    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.7rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.2rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
    },
    h6: {
      fontWeight: 600,
      lineHeight: "23px",
      letterSpacing: "0.15px",
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
    subtitle1: {
      fontSize: "0.8rem",
    },
  },
  palette: {
    text: {
      primary: "#3F3F3F",
      secondary: "#848484",
    },
    primary: {
      main: "#27CCBC",
    },
    secondary: {
      main: "#FCD462",
    },
    background: {
      default: "#fff",
      1: "#FBFBFB",
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body, #root": {
          height: "100%",
        },
        "@font-face": [Font],
        // "@font-face": [FONT_MEDIUM],
      },
    },
  },
});

export default theme;

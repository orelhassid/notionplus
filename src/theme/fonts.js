import CustomFontRegular from "../assets/fonts/Rubik/Rubik-Regular.ttf";
import CustomFontMedium from "../assets/fonts/Rubik/Rubik-Medium.ttf";

export const Font = {
  fontFamily: "CustomFont",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('CustomFont'),
    local('CustomFont-Regular'),
    url(${CustomFontRegular}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export const FONT_MEDIUM = {
  fontFamily: "CustomFontMedium",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 500,
  src: `
    local('CustomFontMedium'),
    local('CustomFont-Medium'),
    url(${CustomFontMedium}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

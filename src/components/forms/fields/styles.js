import { makeStyles, fade, withStyles } from "@material-ui/core/styles";
import { BG_INPUT, FONTS, ALIGN } from "../../../theme/config";

const padding = "5px 10px 10px 16px";

export default makeStyles((theme) => ({
  formHeader: {
    textAlign: "left",
  },
  formChildren: {
    textAlign: ALIGN,
  },

  container: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
  },
  label: {
    padding,
    order: -1,
    fontWeight: 500,
    textTransform: "capitalize",
  },
  help: {
    padding,
    color: theme.palette.text.primary,
    opacity: 0.8,
  },
  error: {
    padding,
    color: theme.palette.error.main,
    opacity: 0.8,
  },

  input: {
    backgroundColor: BG_INPUT,
    // padding: "14px 16px",
    // paddingTop: theme.spacing(2),
    paddingInlineStart: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    // fontSize: 16,
    margin: 0,
    fontFamily: FONTS.join(","),
  },
  inputFocused: {
    boxShadow: `${fade(theme.palette.primary.main, 0.6)} 0 0 0 0.1rem`,
    "& + label": {
      color: theme.palette.primary.main,
      fontWeight: 600,
    },
  },
}));

export const CustomizeInput = withStyles((theme) => ({
  root: {
    backgroundColor: BG_INPUT,
    // padding: "14px 16px",
    // paddingTop: theme.spacing(2),
    paddingInlineStart: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.text.primary,
    // fontSize: 16,
    margin: 0,
    fontFamily: FONTS.join(","),
  },
}));

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navigation: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    borderBottom: `1px solid ${theme.palette.grey[200]}`,
  },
  logo: {
    flexGrow: 1,
    padding: "0 10px",
    overflow: "auto",
  },
  title: {
    paddingInlineStart: "10px",
    textOverflow: "ellipsis",
  },
  drawer: {},
  drawerButton: {},

  list: {
    display: "flex",
    // flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      gap: "10px",
      flexDirection: "row",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: 250,
      gap: 0,
      height: "100%",
    },
  },
  listItem: {
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
    },
    [theme.breakpoints.down("sm")]: {
      // gap: 0,
      paddingTop: "10px",
      paddingBottom: "10px",
    },

    // color: theme.palette.primary.main,
  },
  listItemText: {
    flex: "0 1 auto",
  },
  listItemIcon: {
    minWidth: "auto",
  },
}));

export default useStyles;

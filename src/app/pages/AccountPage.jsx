import { Avatar, Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import DashboardPage from "../components/DashboardPage";

import Header from "../components/Header";
import Page from "../components/Page";
import useAuth from "../hooks/useAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function AccountPage() {
  const { user } = useAuth();
  const classes = useStyles();
  return (
    <DashboardPage>
      <Box
        display="flex"
        mx="auto"
        py={4}
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        textAlign="center"
      >
        <Avatar alt={user.name} src={user.image} className={classes.large} />
        <Typography variant="h1">{user.name}</Typography>
        <Typography variant="subtitle1">{user.email}</Typography>
      </Box>
    </DashboardPage>
  );
}

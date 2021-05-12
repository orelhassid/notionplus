import { Typography } from "@material-ui/core";
import React from "react";
import { SEO, Header } from "../components";
import AuthForm from "../components/Forms/AuthForm";

import Screen from "../components/Screen/Screen";
import useAuth from "../hooks/useAuth";
import useSites from "../hooks/useSites";

export default function HomeScreen() {
  const { isReady } = useSites();
  const { user, status } = useAuth();
  console.log("status", status);

  return (
    <Screen isReady={isReady} center>
      <SEO title="Home" />
      <Header
        title="Build your first website with Notion"
        subTitle="Themes, RTL Support, Domain name and more"
        center
      />
      <Typography>Email {user.email}</Typography>

      <AuthForm />
    </Screen>
  );
}

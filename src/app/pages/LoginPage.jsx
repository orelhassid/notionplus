import { Typography } from "@material-ui/core";
import React from "react";
import LoginForm from "../components/forms/LoginForm";
import Header from "../components/Header";
import Page from "../components/Page";
import useAuth from "../hooks/useAuth";

export default function LoginPage() {
  const { user } = useAuth();
  return (
    <Page>
      <Header
        title="WELCOME TO NOTION PLUS"
        subTitle="Making beatiful websites builded with Notion"
        center
      />
      <Typography
        variant="subtitle1"
        style={{ textAlign: "center", opacity: 0.8 }}
      >
        Currently only Google Authentication is supported.
      </Typography>
      <LoginForm />
    </Page>
  );
}

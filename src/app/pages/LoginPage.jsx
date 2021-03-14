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
        subTitle="Making a beatifull website builded with Notion"
        center
      />
      <h3>{user.name}</h3>
      <LoginForm />
    </Page>
  );
}

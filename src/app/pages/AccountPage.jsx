import React from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import useAuth from "../hooks/useAuth";

export default function AccountPage() {
  const { user } = useAuth();
  return (
    <Page>
      <Header title={user.name} subTitle="Your Profile Page" />
    </Page>
  );
}

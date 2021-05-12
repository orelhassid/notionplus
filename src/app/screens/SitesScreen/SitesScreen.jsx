import React, { useEffect } from "react";

import CreatePostForm from "../../components/Forms/CreatePostForm";
import Header from "../../components/Header/Header";

import Posts from "../../components/Posts/Posts";
import Screen from "../../components/Screen/Screen";
import useSites from "../../hooks/useSites";

export default function SitesScreen() {
  const { sites, isReady, getSites } = useSites();

  useEffect(() => {
    getSites();
  }, []);

  console.log("posts", sites);

  return (
    <Screen isReady={isReady} center>
      <Header title="Sites Screen" />

      {/* <CreatePostForm /> */}
      {/* <Posts posts={posts} /> */}
    </Screen>
  );
}

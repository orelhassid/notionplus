import React, { useState } from "react";
import { useParams } from "react-router";

import Screen from "../components/Screen/Screen";
import useSites from "../hooks/useSites";
import PostSettingsForm from "../components/Forms/PostSettingsForm";
import { Typography } from "@material-ui/core";
import Header from "../components/Header/Header";
export default function PostSettingsScreen() {
  const { id } = useParams();
  const { isReady, getPostById } = useSites();
  const [post, setPost] = useState(() => {
    console.log("post");
    return getPostById(id);
  });
  return (
    <Screen isReady={isReady} center>
      <Header title={`Post ${post?.title} Screen`} />

      <PostSettingsForm />
    </Screen>
  );
}

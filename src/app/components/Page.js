import React from "react";
import AppLoading from "./AppLoading";
import Navigation from "./Navigation/Navigation";
import { Box, Fade } from "@material-ui/core";

export default function Page({ children, isReady, back }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      style={{
        height: "100%",
      }}
    >
      <Navigation back={back} />
      {isReady ? children : <AppLoading />}
    </Box>
  );
}

Page.defaultProps = {
  isReady: true,
};

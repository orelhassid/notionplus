import React from "react";
import AppLoading from "./AppLoading";
import Navigation from "./Navigation/Navigation";
import { Fade } from "@material-ui/core";

export default function Page({ children, isReady, back }) {
  return (
    <div>
      <Navigation back={back} />
      {isReady ? children : <AppLoading />}
    </div>
  );
}

Page.defaultProps = {
  isReady: true,
};
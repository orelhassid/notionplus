import React, { useState } from "react";
import ThemeProvider from "./theme";
import { AuthContextProvider } from "./auth";
import { AlertContextProvider } from "./alert";
import AppLoading from "../components/AppLoading/AppLoading";
import { HelmetProvider } from "react-helmet-async";

export default function Provider({ children }) {
  const [isReady, setIsReady] = useState(false);
  return (
    <ThemeProvider>
      <AlertContextProvider>
        <AuthContextProvider onReady={setIsReady}>
          <HelmetProvider>{isReady ? children : <AppLoading />}</HelmetProvider>
        </AuthContextProvider>
      </AlertContextProvider>
    </ThemeProvider>
  );
}

import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline } from "@material-ui/core";

import AppRouter from "./app/services/AppRouter";
import ThemeProvider from "./app/contexts/theme";
import { AuthContextProvider } from "./app/contexts/auth";
import AppLoading from "./app/components/AppLoading";
import { AlertContextProvider } from "./app/contexts/alert";

export default function App() {
  const [isUserReady, setIsUserReady] = useState(false);

  return (
    <ThemeProvider>
      <AuthContextProvider onReady={setIsUserReady}>
        <AlertContextProvider>
          <HelmetProvider>
            <CssBaseline />
            {isUserReady ? <AppRouter /> : <AppLoading />}
          </HelmetProvider>
        </AlertContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

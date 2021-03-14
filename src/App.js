import React, { useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { CssBaseline } from "@material-ui/core";

import AppRouter from "./app/services/AppRouter";
import ThemeProvider from "./app/contexts/theme";
import { AuthContextProvider } from "./app/contexts/auth";
import useAuth from "./app/hooks/useAuth";
import AppLoading from "./app/components/AppLoading";

export default function App() {
  const [isUserReady, setIsUserReady] = useState(false);

  return (
    <ThemeProvider>
      <AuthContextProvider onReady={setIsUserReady}>
        <HelmetProvider>
          <CssBaseline />
          {isUserReady ? <AppRouter /> : <AppLoading />}
        </HelmetProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

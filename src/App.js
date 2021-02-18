import { HelmetProvider } from "react-helmet-async";
import { CssBaseline } from "@material-ui/core";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./theme/ThemeProvider";
import UserContextProvider from "./contexts/UserContext";
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <HelmetProvider>
          <UserContextProvider>
            <CssBaseline />
            <Routes />
          </UserContextProvider>
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

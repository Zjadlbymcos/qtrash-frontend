import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Page from "./components/Page/Page";
import { StoreProvider } from "./store/StoreProvider";
import "./api";

export default function App() {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <StoreProvider>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <Router>
          <NavigationMenu />
          <Page />
        </Router>
      </GoogleOAuthProvider>
    </StoreProvider>
  );
}

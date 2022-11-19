import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Page from "./components/Page/Page";

export default function App() {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <div className="App">
        <Router>
          <NavigationMenu />
          <Page />
        </Router>
      </div>
    </GoogleOAuthProvider>
  );
}

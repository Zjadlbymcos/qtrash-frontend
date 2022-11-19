import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";

export default function App() {
  const [count, setCount] = useState(0);

  const CLIENT_ID = import.meta.env.VITE_VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <NavigationMenu />

        <div className="App">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src="/vite.svg" className="logo" alt="Vite logo" />
            </a>
            <a href="https://reactjs.org" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </GoogleOAuthProvider>
    </React.Fragment>
  );
}

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationMenu from "./components/NavigationMenu/NavigationMenu";
import Page from "./components/Page/Page";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Page />
      </Router>
    </div>
  );
}

import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import Page from './components/Page/Page';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <NavigationMenu />
        <Page />
      </Router>
    </div>
  );
}

export default App;

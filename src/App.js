import React from 'react';

// Resources
import './App.css';
import header from './header.webp';
import knoppen from './buttons.webp';

// Components
import Clock from './Clock.js';
import CodeEntry from './CodeEntry.js';

// Application
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          <img src={header} alt="COUNTDOWN TIMER KLOK"></img>
        </div>
        <Clock/>
        <img className="knoppen" src={knoppen} alt="knoppen"></img>
        <CodeEntry/>
      </header>
    </div>
  );
}

export default App;

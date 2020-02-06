import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// Resources
import './App.css';

// Components
import CountDownPage from './CountDownPage';
import InitPage from "./InitPage";

// Application
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/arm">
          <CountDownPage/>
        </Route>
        <Route path="/">
          <InitPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

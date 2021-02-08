import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.scss';
import './fontawesome';

import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div>
      
      <Router>
          <Switch>
              <Route path="/">
                <Dashboard/>
              </Route>
          </Switch>
      </Router>
      </div>

  );
}

export default App;

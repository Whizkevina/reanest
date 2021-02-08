import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.scss';
import './fontawesome';

import Dashboard from './components/Dashboard';

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/dashboard">
                <Dashboard/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;

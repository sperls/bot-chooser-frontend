import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home'
import BotChooser from './BotChooser'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/bots">
            <BotChooser />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

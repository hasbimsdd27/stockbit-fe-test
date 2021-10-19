import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomeScreen from "./screen/main";
import DetailScreen from "./screen/detail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <HomeScreen />
        </Route>
        <Route path="/detail/:imdbID">
          <DetailScreen />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

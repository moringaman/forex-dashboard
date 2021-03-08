import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import DashBoard from "./containers/DashBoard";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={DashBoard} />
  </Switch>
);

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registry from "../components/Registry";
import Main from "../components/Main";
import Login from "../components/Login";

const Routers = () => (
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Registry} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  </div>
);

export default Routers;

import React from "react";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import Employees from "./pages/Employees";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/employees" component={Employees} />
        <Route path="*">
          <Link to="employees">Employees</Link>
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Employees from "./pages/Employees";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/employees" />
        </Route>
        <Route exact path="/employees" component={Employees} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

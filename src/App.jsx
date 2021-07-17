import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import View from "./components/students/View";
import Edit from "./components/students/Edit";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Header
        title="React CRUD with Axios"
        styleclass="bg-success text-light"
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/view/:id" component={View} />
        <Route exact path="/edit/:id" component={Edit} />
      </Switch>
    </>
  );
};

export default App;

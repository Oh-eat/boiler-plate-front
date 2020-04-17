import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route
        path="/register"
        exact
        component={Auth(RegisterPage, "withoutAuth")}
      />
      <Route path="/login" exact component={Auth(LoginPage, "withoutAuth")} />
    </Switch>
  );
}

export default App;

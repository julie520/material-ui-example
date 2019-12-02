import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  );
}

export default App;

import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;

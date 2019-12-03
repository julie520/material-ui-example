import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Checkout from "./pages/checkout/Checkout";
import Footer from "./components/footer/Footer";
import Album from "./pages/album/Album";
import Blog from "./pages/blog/Blog";
import Pricing from "./pages/pricing/Pricing";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/album" component={Album} />
        <Route path="/blog" component={Blog} />
      </Switch>
      <Footer />
    </Fragment>
  );
}

export default App;

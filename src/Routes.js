import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import NewOffer from "./containers/NewOffer";
import Offers from "./containers/Offers";
import Settings from "./containers/Settings";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";

export default function Routes() {
  return (
    <Switch>i
      <Route exact path="/">
        <Home />
      </Route>
      <UnauthenticatedRoute exact path="/login">
        <Login />
      </UnauthenticatedRoute>
      <UnauthenticatedRoute exact path="/signup">
        <Signup />
      </UnauthenticatedRoute>
      <AuthenticatedRoute exact path="/settings">
        <Settings />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/offers/new">
        <NewOffer />
      </AuthenticatedRoute>
      <AuthenticatedRoute exact path="/offers/:id">
        <Offers />
      </AuthenticatedRoute>
      {/* finally catch all routes not found */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../screens/HomePage";
import Login from "../screens/Login";
import SignUp from "../screens/SignUp";
import Dashboard from "../screens/Dashboard";
import NotFound from "../screens/NotFound";

const BaseRouter = () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login/" component={Login} />
      <Route exact path="/registration/" component={SignUp} />
      <Route exact path="/dashboard/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  </React.Fragment>
);
// export default BaseRouter;

function mapStateToProps(state) {
  return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(BaseRouter);

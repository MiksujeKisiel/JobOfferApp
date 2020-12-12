import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Layout from "./Layout/Layout";
import Logout from "./components/User/Logout";
import AddJob from './components/Job/AddJob'
import Main from './components/Job/Main'
import { connect } from "react-redux";
import VerifyEmail from "./components/User/VerifyEmail";
import RecoverPassword from './components/User/RecoverPassword'
import Profile from './components/User/Profile';


const App = ({ loggedIn, emailVerified }) => {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/verify-email" component={VerifyEmail} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/" component={Main} />
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/logout" component={Logout} />
        <Route path="/addjob" component={AddJob} />
        <Route exact path="/profile" component={Profile} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recover-password" component={RecoverPassword} />
        <Route exact path="/" component={Main} />
      </Switch>
    );
  }
  return (
    <Router>
      <Layout>{routes}</Layout>
    </Router>
  );
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);

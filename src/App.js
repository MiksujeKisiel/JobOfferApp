import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Layout from "./layout/Layout";
import Logout from "./components/User/Logout";
import AddJob from './components/Job/AddJob'
import ProfileJobs from './components/Job/Main'
import JobOffers from './components/Jobs/JobOffers'
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
      
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/profile-jobs" component={ProfileJobs} />
        <Route path="/logout" component={Logout} />
        <Route path="/addjob" component={AddJob} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={JobOffers} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recover-password" component={RecoverPassword} />
        <Route exact path="/" component={JobOffers} />
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


const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

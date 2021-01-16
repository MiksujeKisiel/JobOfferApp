import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { compose } from "redux";
import { connect } from "react-redux";
import GlobalStyle from "./assets/style/GlobalStyle";
import Login from "./components/User/Login";
import Signup from "./components/User/Signup";
import Layout from "./layout/Layout";
import Logout from "./components/User/Logout";
import VerifyEmail from "./components/User/VerifyEmail";
import RecoverPassword from "./components/User/RecoverPassword";
import Profile from "./components/User/Profile";
import AddJob from "./components/JobActions/AddJob";
import Dashboard from "./components/Jobs/Dashboard";
import UserDashboard from "./components/UserJob/UserDashboard";
import JobDetails from "./components/Jobs/JobDetails";
import JobEditor from "./components/Jobs/JobEditor";

const App = ({ loggedIn, emailVerified }) => {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
        <Layout>
          <Route exact path="/verify-email" component={VerifyEmail} />
          <Route exact path="/logout" component={Logout} />
          <Redirect to="/verify-email" />
        </Layout>
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Layout>
          <Route exact path="/profile-jobs" component={UserDashboard} />
          <Route path="/logout" component={Logout} />
          <Route path="/addjob" component={AddJob} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/job/:id" component={JobDetails} />
          <Route exact path="/editjob/:id" component={JobEditor} />
        </Layout>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/recover-password" component={RecoverPassword} />
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/job/:id" component={JobDetails} />
        </Layout>
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <Router
      onUpdate={() => window.scrollTo(0, 0)}
      history={createBrowserHistory()}
    >
      {routes}
      <GlobalStyle />
    </Router>
  );
};

const mapStateToProps = ({ firebase, firestore }) => {
  return {
    loggedIn: firebase.auth.uid ? true : null,
    emailVerified: firebase.auth.emailVerified,
  };
};

const mapDispatchToProps = {};

export default compose(connect(mapStateToProps, mapDispatchToProps))(App);

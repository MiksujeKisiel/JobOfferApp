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
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import Layout from "./layout/Layout";
import Logout from "./pages/User/Logout";
import VerifyEmail from "./pages/User/VerifyEmail";
import RecoverPassword from "./pages/User/RecoverPassword";
import Settings from "./pages/User/Settings";
import AddJob from "./pages/JobActions/AddJob";
import Dashboard from "./pages/Dashboard";
import UserDashboard from "./pages/UserDashboard";
import JobDetails from "./pages/JobDetails";
import JobEditor from "./components/Jobs/JobEditor";
import Profile from "./pages/User/Profile";
import UserProfiles from "./pages/UserProfiles";
import UserDetails from "./components/UserList/UserDetails";
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
          <Route path="/logout" component={Logout} />
          <Route path="/addjob" component={AddJob} />
          <Route exact path="/editjob/:id" component={JobEditor} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/job/:id" component={JobDetails} />
          <Route exact path="/user-profiles" component={UserProfiles} />
          <Route
            exact
            path="/user-profile-details/:id"
            component={UserDetails}
          />
          <Route exact path="/profile-jobs" component={UserDashboard} />
          <Route exact path="/profile-settings" component={Settings} />
          <Route exact path="/profile" component={Profile} />
          <Redirect to="/" />
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
          <Route exact path="/user-profiles" component={UserProfiles} />
          <Route
            exact
            path="/user-profile-details/:id"
            component={UserDetails}
          />
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

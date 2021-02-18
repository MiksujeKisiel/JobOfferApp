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
import Layout from "./layout/Layout";
// import UserLayout from './layout/UserLayout'
import GlobalStyle from "./assets/style/GlobalStyle";
//login
import Login from "./pages/UserActions/Login";
import Signup from "./pages/UserActions/Signup";
import Logout from "./pages/UserActions/Logout";
import VerifyEmail from "./pages/UserActions/VerifyEmail";
import RecoverPassword from "./pages/UserActions/RecoverPassword";
//user settings
import Settings from "./pages/UserPages/Settings";
import Profile from "./pages/UserPages/Profile";
import UserDashboard from "./pages/UserPages/UserJobs";
//main site
import Dashboard from "./pages/Jobs/Jobs";
import JobDetails from "./pages/Jobs/JobDetails";
//user profiles
import UserProfiles from "./pages/UserProfiles/UserProfiles";
import UserDetails from "./pages/UserProfiles/UserDetails";
//job actions
import JobEditor from "./components/Jobs/JobEditor";
import AddJob from "./pages/JobActions/AddJob";


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
      </Layout>
    
        <Redirect to="/" />
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

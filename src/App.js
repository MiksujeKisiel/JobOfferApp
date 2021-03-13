import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { useSelector } from "react-redux";
import Layout from "./layout/Layout";
import GlobalStyle from "./assets/style/GlobalStyle";
//user actions
import { Login, Signup, Logout, VerifyEmail, RecoverPassword} from './pages/UserActions'
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

const App = () => {
  const [loggedIn, emailVerified] = useSelector((state) => [
    state.firebase.auth.uid ? true : null,
    state.firebase.auth.emailVerified,
  ]);
  
  let routes;
  if (loggedIn && !emailVerified) {
    routes = (
      <Switch>
          <Route exact path="/verify-email" component={VerifyEmail} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/verify-email" />
      </Switch>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Switch>
        <Route exact path="/profile-jobs" component={UserDashboard} />
        <Route exact path="/profile-settings" component={Settings} />
        <Route exact path="/profile" component={Profile} />
        <Route path="/addjob" component={AddJob} />
        <Route exact path="/editjob/:id" component={JobEditor} />
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

export default App;

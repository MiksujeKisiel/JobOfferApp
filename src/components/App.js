import React from 'react';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './User/Dashboard';
import PrivateRoute from './PrivateRoute';
import Main from './Main';
import Login from './User/Login';
import Signup from './User/Signup';
import ForgotPassword from './User/ForgotPassword';
import UpdateProfile from './User/UpdateProfile';
import OfferBox from './OfferBox';

import Layout from '../layout/Layout';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Switch>
            <Layout>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
            <PrivateRoute path="/update-profile" component={UpdateProfile}/>
            <Route exact path="/" component={Main}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/>  
            <PrivateRoute path="/post" component={OfferBox}/>
            </Layout>
          </Switch>
        </AuthProvider>
      </Router>
     
    </>
  );
}

export default App;

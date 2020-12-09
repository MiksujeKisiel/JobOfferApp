import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/User/Login';
import Signup from './components/User/Signup';
import Layout from './Layout/Layout';
import { Provider } from 'react-redux';
import store from './store';




function App() {
  return (
 
    <Provider store={store}>
      <Router>
          <Switch>
            <Layout> 
            <Route exact path="/signup" component={Signup}/>
            <Route path="/" component={Login}/>    
            </Layout>
          </Switch>  
      </Router>
      </Provider>
  

  );
}

export default App;

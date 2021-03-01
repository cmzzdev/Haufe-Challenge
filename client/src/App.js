import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from 'routing/PrivateRoute'

import { Provider } from 'react-redux';
import store from './store';

import tokenAuth from './config/token'
import AuthState from 'context/auth/authState'

import Header from 'layout/Header'

import LoginPage from 'pages/Login'
import RegisterPage from 'pages/Register'
import ListPage from 'pages/List'
import DetailPage from 'pages/Detail'

const token = localStorage.getItem('token');
if(token){
  tokenAuth(token);
}

function App() {
  return (
    <Provider store={store}>
      <AuthState>
        <div className="App">          
          <Router>  
            <Header />
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/register" component={RegisterPage} />
              <PrivateRoute exact patch="/list" component={ListPage} />
              <PrivateRoute exact patch="/detail/:id" component={DetailPage} />
            </Switch>
          </Router>
        </div>
      </AuthState>
    </Provider>
  );
}

export default App;

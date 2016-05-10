import React from 'react';
import { Router,IndexRoute, Route, browserHistory } from 'react-router'

import SignUp from '../../ui/SignUp.jsx';
import LogIn from '../../ui/Login.jsx';
import Home from '../../ui/Home.jsx';
import Hello from '../../ui/Hello.jsx';
import App from '../../ui/App.jsx';

export const renderRoutes = () => (
  <Router path='/' history={browserHistory}>
  	<Route component={App}>
	  	<Route path='/' component={Home} />
	    <Route path="/signup" component={SignUp} />
	    <Route path="/login" component={LogIn} />
	    <Route path="/hello" component={Hello} />
  	</Route>
  </Router>
);
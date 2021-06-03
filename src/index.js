import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom'
import './index.css';

import Main from './pages/Main';
import Login from './pages/Login';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Switch>
        <Redirect exact from="/" to="/main" />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


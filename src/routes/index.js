import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Notes from '../containers/Notes';

const routes = (
  <Router>
    <Route path="/" component={Notes} />
    <Redirect from="/*" to="/" />
  </Router>
);

export default routes;

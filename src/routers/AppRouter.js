import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import AboutPage from '../components/AboutPage';
import DatabasePage from '../components/DatabasePage';
import DetailPage from '../components/DetailPage';
import RequestFormPage from '../components/RequestFormPage';
import NotFoundPage from '../components/NotFoundPage';
import TopPage from '../components/TopPage';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


export const history = createHistory();


// Top => PublicRouter
const AppRouter = () => (
  <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={TopPage} exact={true}/>
        <PrivateRoute path="/about" component={AboutPage}/>
        <PrivateRoute path="/database" component={DatabasePage} exact={true} />
        <PrivateRoute path="/database/:id" component={DetailPage} />
        <PrivateRoute path="/form" component={RequestFormPage} />
        <PublicRoute component={NotFoundPage} />
      </Switch>
  </Router>
);

export default AppRouter;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import TodoCreate from '../pages/TodoCreate';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/create/" component={TodoCreate} />
    <Route path="/edit/:id" component={TodoCreate} />
  </Switch>
);

export default Routes;

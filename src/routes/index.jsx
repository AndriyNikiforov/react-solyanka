import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import TodoCreate from '../pages/TodoCreate';
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/create/" component={TodoCreate} />
    <Route path="/edit/:id" component={TodoCreate} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;

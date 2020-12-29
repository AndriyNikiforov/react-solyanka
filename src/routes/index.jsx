import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import TodoCreate from '../pages/TodoCreate';
import SignIn from '../pages/SingIn';
import SignUp from '../pages/SignUp';
import PrivateRouter from '../components/PrivateRouter';

const Routes = () => (
  <Switch>
    <PrivateRouter exact path="/" Component={Home} />
    <PrivateRouter path="/create/" Component={TodoCreate} />
    <PrivateRouter path="/edit/:id" Component={TodoCreate} />
    <Route path="/login" component={SignIn} />
    <Route path="/signup" component={SignUp} />
  </Switch>
);

export default Routes;

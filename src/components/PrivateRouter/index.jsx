import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Cookies from 'js-cookie';

const PrivateRouter = ({ Component, path, exact }) => {
  const isAuthenticated = Cookies.get('token');

  return (isAuthenticated) ? (
    <Route path={path} exact={exact} component={Component} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

export default PrivateRouter;

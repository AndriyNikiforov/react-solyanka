import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const PrivateRouter = ({ Component, path, exact }) => {
  const isAuthenticated = Cookies.get('token');

  return (isAuthenticated) ? (
    <Route path={path} exact={exact} component={Component} />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

PrivateRouter.propTypes = {
  Component: PropTypes.func,
  path: PropTypes.string,
  exact: PropTypes.bool,
};

PrivateRouter.defaultProps = {
  Component: <></>,
  path: '/',
  exact: false,
};

export default PrivateRouter;

import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Cookies from 'js-cookie';

const PrivateRouter = ({ Component }) => {
  const isAuthenticated = Cookies.get('token');

  return (isAuthenticated) ? (
    <Component />
  ) : (
    <Redirect to={{ pathname: '/login' }} />
  );
};

PrivateRouter.propTypes = {
  Component: PropTypes.node,
};

PrivateRouter.defaultProps = {
  Component: (<></>),
};

export default PrivateRouter;

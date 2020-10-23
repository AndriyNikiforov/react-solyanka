/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import store from './storage';
import history from './utils/history';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Title</title>
      </Helmet>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

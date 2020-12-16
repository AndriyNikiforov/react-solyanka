/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import store from './store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
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

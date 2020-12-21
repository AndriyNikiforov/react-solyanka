/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './routes';
import Storages from './store';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={Storages.store}>
    <PersistGate loading={null} persistor={Storages.persistor}>
      <Router>
        <Routes />
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <title>Title</title>
        </Helmet>
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

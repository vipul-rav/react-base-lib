import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'whatwg-fetch';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { store } from './redux/store';
import './assets/css/app.scss';

const BaseAppClass = ({ ...props }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App {...props} />
      </BrowserRouter>
    </Provider>
  );
};

export { BaseAppClass };

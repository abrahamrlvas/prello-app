import React from 'react';
import ReactDOM from 'react-dom';
import { PrelloApp } from './PrelloApp';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
    <PrelloApp />
  </Provider>,
  document.getElementById('root')
);

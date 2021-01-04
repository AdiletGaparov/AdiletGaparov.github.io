import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

import './assets/css/main.css?v=1.9.0';
import App from './App';
import reportWebVitals from './reportWebVitals';

const hist = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
      <Router history={hist}>
          <App/>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

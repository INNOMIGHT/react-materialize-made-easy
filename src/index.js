import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
export { default as Navigation } from "./Navigation";
export { default as Sidenav } from "./Sidenav";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


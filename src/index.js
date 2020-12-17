import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { debugContextDevtool } from 'react-context-devtool';

/* 
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
 */
const container = document.getElementById("root");

ReactDOM.render(<App />, container);

// Attach root container
debugContextDevtool(container);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

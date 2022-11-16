import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Hello} from './basics/Hello';
import {DateTime} from './basics/DateTime'
import DateTimeCC from './basics/DateTimeCC';
import SystemTimeDisplayMessage from './basics/SystemTimeDisplayMessage';
import Greet from './basics/Greet';
import GreetCC from './basics/GreetCC';
//Render a component called App

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GreetCC />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
  
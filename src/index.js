import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//
import Hello from './Hello';
import MyRedux from './myRedux';
import MyRouter from './myRouter';
import MyApp from './component/MyApp';
import './App.css';

ReactDOM.render(
  <MyRouter />,
  document.getElementById('root')
);


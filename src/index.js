import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App';
//
import Hello from './Hello';
import MyRedux from './myRedux';
import MyApp from './component/MyApp';
import './App.css';

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);




ReactDOM.render(
    <MyRedux />,
    document.getElementById('test')
);

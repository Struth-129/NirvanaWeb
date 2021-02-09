import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Side from './components/Side';
import Chatbot from './components/Chatbot';
import './main';
import './util';
import Home from './components/Home';
import Test from './pages/Test';

ReactDOM.render(
  <>
  {/* <div id = "wrapper">
    <Header/>
      <div id="main">
        <Home/>
      </div>
      <Side/> */}
      <Test/>
  {/* </div>
  <Chatbot/> */}
  </>,
  document.getElementById('root')
);


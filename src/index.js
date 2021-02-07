import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Side from './components/Side';
import Chatbot from './components/Chatbot';
import './main';
import './util';

ReactDOM.render(
  <>
  <div id = "wrapper">
    <Header/>
      <div id="main">
        <Side/>
      </div>
  </div>
  <Chatbot/>
  </>,
  document.getElementById('root')
);


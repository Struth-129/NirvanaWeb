import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Side from './components/Side';
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
  </>,
  document.getElementById('root')
);


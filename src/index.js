import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import Side from './components/Side';
import Chatbot from './components/Chatbot';
import './main';
import './util';
import Main from './pages/Main';
import Test from './pages/Test';
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/Home" component={Main} />
      <Route path="/Test" component={Test} />
    </Switch>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


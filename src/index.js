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
import Signin from './pages/Signin';
import About from "./pages/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/Home" component={Main} />
      <Route path="/Test" component={Test} />
      <Route path="/signin" component={Signin}/>
      <Route path="/about" component={About}/>
    </Switch>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


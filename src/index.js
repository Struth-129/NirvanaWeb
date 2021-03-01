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
import Err404 from "./pages/Err404";
import Result from "./pages/Result";
import { BrowserRouter, Route, Switch } from "react-router-dom";
ReactDOM.render(
  <>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/Home" component={Main} />
      <Route exact path="/Test" component={Test} />
      <Route exact path="/signin" component={Signin}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/Result" component= {Result}/>
      <Route path="*" component={Err404}/>
    </Switch>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


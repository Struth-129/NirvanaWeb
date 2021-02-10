import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Side from '../components/Side';
import Chatbot from '../components/Chatbot';
import '../main';
import '../util';
import Home from '../components/Home';
import Test from './Test';

function Main() {
    return (
        <>
        <div id = "wrapper">
            <Header/>
                <div id="main">
                    <Home/>
                </div>
            <Side/>
        </div>
         <Chatbot/>
        </>
    );
};
export default Main;
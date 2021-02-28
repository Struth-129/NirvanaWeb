import React from 'react';
import '../index.css';
import Header from '../components/Header';
import Side from '../components/Side';
import Chatbot from '../components/Chatbot';
import '../main';
import '../util';

const Err404 = () =>{
    return(
        <>
        <div id = "wrapper">
            <Header/>
                <div id="main">
                </div>
            <Side/>
        </div>
         <Chatbot/>
        </>
    );
};

export default Err404;
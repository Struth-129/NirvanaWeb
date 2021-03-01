import React, { useContext, useEffect, useState,createContext } from "react";
import {Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Header from '../components/Header';
import '../main';
import '../util';
import '../index.css';
import './Result';
import { Jumbotron, Container } from 'reactstrap';
import { FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core'
const data = require('../data.json');

var n = 0,len = data.length,score = 0,ts = 0;
function Test() {
  let history = useHistory();
  const [value, setValue] = React.useState('Never');
  const [nextpre,settext] = useState("Next Page");
  const handleChange = (event) => {
    setValue(event.target.value);
    if(event.target.value=='Never'){
      score = 0;
    }else if(event.target.value=='mild'){
      score = 1;
    }else if(event.target.value=='moderate'){
      score = 2;
    }else{
      score = 3;
    }
  };
  const[curques,setQues] = useState(data[0]);
  
  const ind = ()=>
  { 
    ts+=score;n++;
    console.log(ts);
    setQues(data[n]);
    score = 0;
    if(n==len-1){
      settext("Submit");
    }
    if(n==len){
      history.push({
        pathname: '/Result',
        state: { detail: ts }
    })}
  }
  return (
    <>
    <div id = "wrapper">
      <Header/>
      <div id="main">
        <div className="test_main">
          <Jumbotron fluid className="test_box">
          <Container fluid className="test_middle">
            <h3>{n+1} . {curques}</h3>
            <hr></hr>
          <p className="upptext lead">Please Select the most suitable option</p>
          <FormControl component="fieldset">
                  <RadioGroup className="active form_btn" aria-label="response" name="response" value={value} onChange={handleChange}>
                        <FormControlLabel className="form_btn" value="Never" control={<Radio />} label="Nil" />
                        <FormControlLabel className="form_btn" value="mild" control={<Radio />} label="mild" />
                        <FormControlLabel className="form_btn" value="moderate" control={<Radio />} label="moderate" />
                        <FormControlLabel className="form_btn" value="serve" control={<Radio />} label="serve" />
                  </RadioGroup>
          </FormControl>
        </Container>
        </Jumbotron>
        <ul className="actions pagination test_btn">
		<li id="next"><button className="button large next test_btn_h" onClick = {ind}>{nextpre}</button></li>
	  </ul>
    </div>
    </div>
    </div>
    </>
  );
};

export default Test;

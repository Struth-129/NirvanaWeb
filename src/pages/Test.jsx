import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import '../main';
import '../util';
import '../index.css';
import { Jumbotron, Container } from 'reactstrap';
import { FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core'
const data = require('../data.json');

var n = 0,len = data.length;
function Test() {
  const [value, setValue] = React.useState('Never');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const[curques,setQues] = useState(data[0]);
  function ind()
  {
    n++;
    if(n>=len)
    {
      console.log(len);
    }else setQues(data[n]);
  }
  return (
    <>
    <div id = "wrapper">
            <Header/>
                <div id="main">
    <div className="test_main">
      <Jumbotron fluid className="test_box">
        <Container fluid className="test_middle">
          <h3 className="display-6">{n+1} . {curques}</h3>
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
		<li id="next"><button className="button large next test_btn_h" onClick = {ind} >Next Page</button></li>
	  </ul>
    </div>
    </div>
    </div>
    </>
  );
};

export default Test;
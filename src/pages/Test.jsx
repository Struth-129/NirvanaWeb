import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import '../main';
import '../util';
import '../index.css';
import { Jumbotron, Container } from 'reactstrap';
import { FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core'

var n = 1;
var ques = "Suppose a question here";
function Test() {
  const [value, setValue] = React.useState('Never');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


  return (
    <>
    <div id = "wrapper">
            <Header/>
                <div id="main">
    <div className="test_main">
      <Jumbotron fluid className="test_box">
        <Container fluid className="test_middle">
          <h3 className="display-6">{n} . {data && data.length>0 && data.map((item)=><p>{item.friends}</p>)}</h3>
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
		<li id="next"><button className="button large next test_btn_h">Next Page</button></li>
	  </ul>
    </div>
    </div>
    </div>
    </>
  );
};

export default Test;
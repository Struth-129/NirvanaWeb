import React, { useEffect, useState } from "react";
import Header from '../components/Header';
import '../main';
import '../util';
import '../index.css';
import { Jumbotron, Container } from 'reactstrap';
import { FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core'
const data = require('../data.json');

var n = 0;
var ques = ["Little interest or pleasure in doing  favorite things?","Feeling down, depressed, or hopeless ?", "Trouble falling or staying asleep, or sleeping too much ?",
              "Feeling tired or having little energy ?", "Poor appetite or overeating ?", "Feeling bad about yourself — or that you are a failure or have let yourself down or your family down ?",
            "Trouble concentrating on things, such as reading the newspaper or watching television ?","Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual ?",
          "Thoughts that you would be better off dead or of hurting yourself in some way ?"];
function Test() {
  const [value, setValue] = React.useState('Never');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
<<<<<<< HEAD
  // const [data,setData]=useState([]);
  // const getData=()=>{
  //   fetch('data.json'
  //   ,{
  //     headers : { 
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //      }
  //   }
  //   )
  //     .then(function(response){
  //       return response.json();
  //     })
  //     .then(function(myJson) {
  //       setData(myJson)
  //     });
  // }
  // getData();
  // console.log(getData());
  // useEffect(()=>{
  //   getData()
  // },[])
  console.log(data)
=======
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
        return response.json();
      })
      .then(function(myJson) {
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
>>>>>>> 7a2cbda1a4d46adc029f2b60d9e67bfecd00e4d8
  const[curques,setQues] = useState(ques[0]);
  function ind()
  {
    n++;
    setQues(data[n]);
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
		<li id="prev"><button className="  disabled  button large previous test_btn_h">Previous Page</button></li>
		<li id="next"><button className="button large next test_btn_h" onClick = {ind} >Next Page</button></li>
	  </ul>
    </div>
    </div>
    </div>
    </>
  );
};

export default Test;
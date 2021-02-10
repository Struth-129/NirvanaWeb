import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { FormControl, FormLabel, RadioGroup, FormControlLabel,Radio} from '@material-ui/core'
var n = 1;
var ques = "Suppose a question here";
function Test() {
  const [value, setValue] = React.useState('female');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
    <div className="test_main">
      <Jumbotron fluid className="test_box">
        <Container fluid className="test_middle">
          <h3 className="display-6">{n} . {ques}</h3>
          <hr></hr>
          <p className="upptext lead">Please Select the most suitable option</p>
          <FormControl component="fieldset">
                  <RadioGroup className="form_btn" aria-label="response" name="response" value={value} onChange={handleChange}>
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
		<li id="next"><button className="button large next test_btn_h">Next Page</button></li>
	  </ul>
    </div>
    </>
  );
};

export default Test;
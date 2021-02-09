import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const n = 1;
var ques = "Suppose a question here";
function Test() {
  return (
    <div className="test_main">
      <Jumbotron fluid className="test_box">
        <Container fluid className="test_middle">
          <h3 className="display-6">{n} . {ques}</h3>
          <hr></hr>
          <p className="lead">Please Select the most suitable option</p>
        </Container>
        </Jumbotron>
        <ul className="actions pagination test_btn">
		<li><a href="" className="disabled button large previous test_btn_h">Previous Page</a></li>
		<li><a href="#" className="button large next test_btn_h">Next Page</a></li>
	  </ul>
    </div>
  );
};

export default Test;
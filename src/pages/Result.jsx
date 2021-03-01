import React from 'react'; 
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from '../components/Header';
import Side from '../components/Side';
// import {Score} from './Test';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import md from '../images/md.png';
import "../../src/index.css";




const Result = (props) => {
  const location = useLocation();
  var x = location.state.detail;
  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    x = location.state.detail; // result: 'some_value'
 }, [location]);
  return(  
        <>
        <div id = 'wrapper'>
            <Header/>
            <div id = "main">
          <Card>
        <CardImg top width="100%" src={md} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Stress test</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Score Card</CardSubtitle>
          <CardText>Your result is {x}</CardText>
          <Button className = "stress_res">Go back to Home</Button>
        </CardBody>
      </Card>
    </div>
    <Side/>
            </div>
        </>
    )
}



export default Result;
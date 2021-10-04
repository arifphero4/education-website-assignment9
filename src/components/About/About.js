import React from "react";
import { Col, Row } from "react-bootstrap";
import img from '../../images/1-3-1.jpg';

const About = () => {
  return (
    <div style={{height:"100vh"}} >
      <h1 className="p-3">Who are we?</h1>
     <Row>
       <Col className="align-self-center">
        <p> "Technique Easy Education is an online teaching platform based in Dhaka, Bangladesh. Here at TEE, we’re providing quality education that will help our country's students to get education service near at hand. Our goal to reach rural students who don't get good educational services. "</p>
        
       </Col>
       <Col>
          <img style={{height:"100%"}} src={img} alt="" />
        </Col>
     </Row>
    </div>
  );
};

export default About;

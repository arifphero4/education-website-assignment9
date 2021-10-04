import React from "react";
import { Col, Row } from "react-bootstrap";
import img from '../../images/1-3-1.jpg';

const About = () => {
  return (
    <div style={{height:"100vh"}} >
      <h1 className="p-3">Who are we?</h1>
     <Row>
       <Col className="align-self-center">
        <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat atque totam dignissimos ea nobis magnam earum ex reprehenderit ducimus. Dicta.</p>
        
       </Col>
       <Col>
          <img style={{height:"100%"}} src={img} alt="" />
        </Col>
     </Row>
    </div>
  );
};

export default About;

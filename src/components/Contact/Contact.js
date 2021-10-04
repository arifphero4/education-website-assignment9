import React from 'react';
import './Contact.css';
import { Container } from 'react-bootstrap';

const Contact = () => {
    return (
        <div style={{height:"100vh"}}>
            <h1 className="p-5"> CONTACT US</h1>
           <Container style={{textAlign:"left"}} >
           <input className="d-block  " type="text" placeholder="enter  first name" />
            <input className="d-block " type="text"  placeholder="enter last name"/>
            <input className="d-block " type="text " placeholder="emter email" />
            <textarea className="d-block mb-3" placeholder="your message"></textarea>
            <button className="btn btn-outline-primary">Submit</button>
           </Container>
           
        </div>
    );
};

export default Contact;
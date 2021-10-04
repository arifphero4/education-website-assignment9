import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const navStyle = {
    textDecoration: "none",
    color: "white",
    margin: "0 5px",
  };
  return (
    <Navbar  bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <NavLink
              style={navStyle}
              activeStyle={{ color: "orange", fontWeight: "bold" }}
              to="/home"
            >
             Home
            </NavLink>
            <NavLink
              style={navStyle}
              activeStyle={{ color: "orange", fontWeight: "bold" }}
              to="/Services"
            >
              Services
            </NavLink>
            <NavLink
              style={navStyle}
              activeStyle={{ color: "orange", fontWeight: "bold" }}
              to="/about"
            >
             About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

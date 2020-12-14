import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink activeClassName="active" exact className="navbar-brand" to="/">ITMentor</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink activeClassName="active" className="nav-link" to="/posts">Blog<span className="sr-only">(current)</span></NavLink>
            <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

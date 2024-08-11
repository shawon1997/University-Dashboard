import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <div className='d-flex' style={{height: "60px", padding: "15px", width: "95%", borderRadius: "6px", backgroundColor: "#1d1e3e", color: "white"}}>
      <Navbar expand="lg" style={{width: "100%", backgroundColor: "transparent"}}>
        <Navbar.Brand as={Link} to="/" style={{color: "white", textDecoration: "none"}}>University Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            <Nav.Link as={Link} to="/admin" style={{color: "white", textDecoration: "none"}}>Admin Login</Nav.Link>
            <Nav.Link as={Link} to="/signup" style={{color: "white", textDecoration: "none"}}>Student Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/student-login" style={{color: "white", textDecoration: "none"}}>Student Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

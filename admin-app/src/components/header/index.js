import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
/**
* @author
* @function Header
**/

const Header  = (props) => {
  return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        {/*<Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>*/}
        <Link to="/" className="navbar-brand">Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/*<Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
           
          </Nav>
          <Nav>
            <li className="nav-item">
            <NavLink to="signin" className="nav-link">Signin</NavLink>
            </li>
  
            <li className="nav-item">          
            <NavLink to="signup" className="nav-link">Signup</NavLink>
            </li>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
   )

 }

export default Header
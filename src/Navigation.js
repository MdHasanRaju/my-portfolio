import React from 'react';
import './Navigation.css';
import {  Container, Nav, Navbar , Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand style={{color:"rgb(140, 236, 183)"}} href="#home">_MYPortfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link style={{margin:"auto 0"}} to="/home">Home</Nav.Link>
            <Nav.Link style={{margin:"auto 0"}} to="/about">About</Nav.Link>
              <Link style={{margin:"auto 0", textDecoration:"none", color:"lightgray"}} to="/contact">Contact Me</Link>
              <Nav.Link style={{margin:"auto 0"}} target="_blank" href="https://drive.google.com/file/d/1sSgJ96jnMrLnjFBA3m5_LYako40PYpJC/view?fbclid=IwAR0cMBbmax5fMvklZgjl3jBS-7eBpr2U2bGCRkCky4ltqNCz-2fRJ3EkW2A">Resume</Nav.Link>
              <Nav.Link >
              <Button style={{borderRadius:"40px", padding:"10px 30px"}} className="clr-code" >Case Studies</Button>{' '}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        
    );
};

export default Navigation;
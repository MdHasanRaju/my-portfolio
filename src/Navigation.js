import React from "react";
import "./Navigation.css";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import logo from './images/cover-removebg-preview.png';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand style={{ color: "rgb(140, 236, 183)" }} href="#">
          <img height="60px" weight="65px" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavHashLink
              className="tggle"
              style={{
                margin: "auto 5px",
                textDecoration: "none",
                color: "lightgray",
              }}
              activeClassName="selected"
              activeStyle={{ color: "rgb(140, 236, 183)" }}
              to="/"
            >
              Home
            </NavHashLink>
            {/* <HashLink to="/some/path#with-hash-fragment">Link to Hash Fragment</HashLink> */}
            <NavHashLink
              className="tggle"
              style={{
                margin: "auto 5px",
                textDecoration: "none",
                color: "lightgray",
              }}
              activeClassName="selected"
              activeStyle={{ color: "rgb(140, 236, 183)" }}
              to="/home/#about"
            >
              About
            </NavHashLink>
            <NavHashLink
              className="tggle"
              style={{
                margin: "auto 5px",
                textDecoration: "none",
                color: "lightgray",
              }}
              activeClassName="selected"
              activeStyle={{ color: "rgb(140, 236, 183)" }}
              to="/home/#projects"
            >
              Projects
            </NavHashLink>

            <NavHashLink
              className="tggle"
              style={{
                margin: "auto 5px",
                textDecoration: "none",
                color: "lightgray",
              }}
              activeClassName="selected"
              activeStyle={{ color: "rgb(140, 236, 183)" }}
              to="/blogs"
            >
              Blogs
            </NavHashLink>
            <NavHashLink
              className="tggle"
              style={{
                margin: "auto 5px",
                textDecoration: "none",
                color: "lightgray",
              }}
              activeClassName="selected"
              activeStyle={{ color: "rgb(140, 236, 183)" }}
              to="/contact"
            >
              Contact Me
            </NavHashLink>
            <Nav.Link
              className="tggle"
              style={{ margin: "auto 5px", color: "lightgray" }}
              target="_blank"
              href="https://drive.google.com/file/d/1sSgJ96jnMrLnjFBA3m5_LYako40PYpJC/view?fbclid=IwAR0cMBbmax5fMvklZgjl3jBS-7eBpr2U2bGCRkCky4ltqNCz-2fRJ3EkW2A"
              download
            >
              Resume
            </Nav.Link>
            <NavHashLink
              activeClassName="selected"
              activeStyle={{ color: "rgb(140, 236, 183)" }}
              to="/"
            >
              <Button
                style={{
                  borderRadius: "40px",
                  padding: "10px 30px",
                  margin: "auto 5px",
                  border:"none"
                }}
                className="clr-code"
              >
                Case Studies
              </Button>{" "}
            </NavHashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

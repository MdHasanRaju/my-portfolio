import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Blog3 from "../../../images/undraw_coding_re_iv62.svg";
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div style={{ padding:"100px 0px" }}>
          <Row>
            <Col
              sm={6}
              style={{margin:"auto 0px"}}
            >
              <div style={{ textAlign: "start", color:"white" }}>
                <h4>Hi There, I am</h4>
                <h1>Md. Mahmudul Hasan</h1>
                <h3>MERN Stack Web Developer</h3>
                <p>
                  I am Professional UI/UX Designer With Frontend And Backend Web
                  Development Skills Based on Client Desire.
                </p>
                <Button className="clr-code" style={{marginTop:"10px", padding:"8px 20px", fontWeight:"bold"}}>Hire Me</Button>
              </div>  
            </Col>
                      
            <Col sm={6}>
            <img style={{width:"100%"}} src={Blog3} alt=""/>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

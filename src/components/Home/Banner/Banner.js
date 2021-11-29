import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Container>
        <div style={{ padding:"150px 0px" }}>
          <Row>
            <Col
              sm={6}
              style={{ backgroundColor: "green", textAlign: "start" }}
            >
              <div>
                <h4>Hi There, I am</h4>
                <h1>Md. Mahmudul Hasan</h1>
                <h3>MERN Stack Web Developer</h3>
                <p>
                  I am Professional UI/UX Designer With Frontend And Backend Web
                  Development Skills Based on Client Desire.
                </p>
              </div>
            </Col>
            <Col sm={6}>sm=4</Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

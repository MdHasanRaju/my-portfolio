import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Blog3 from "../../../images/undraw_coding_re_iv62.svg";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <div style={{ padding: "100px 0px" }}>
          <Row>
            <Col sm={6} style={{ margin: "auto 0px" }}>
              <div style={{ textAlign: "start", color: "white" }}>
                <h4>Hi There, I am</h4>
                <h1>
                  Md.{" "}
                  <span style={{ color: "rgb(140, 236, 183)" }}>
                    Mahmudul Hasan
                  </span>
                </h1>
                <h3></h3>

                <h3 style={{ color: "rgb(140, 236, 183)" }}>
                  <Typewriter
                    options={{
                      strings: [
                        "A MERN Stack Web Developer",
                        "A Frontend Developer",
                        "An UI/UX Designer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h3>
                <p>
                  I am Professional UI/UX Designer With Frontend And Backend Web
                  Development Skills Based on Client Desire.
                </p>
                <Link to="/contact"><Button
                  className="clr-code"
                  style={{
                    marginTop: "10px",
                    padding: "8px 20px",
                    fontWeight: "light",
                  }}
                >
                  Hire Me
                </Button></Link>
              </div>
            </Col>

            <Col sm={6}>
              <img style={{ width: "100%" }} src={Blog3} alt="" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

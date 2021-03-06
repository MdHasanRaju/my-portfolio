import React from "react";
import { Col, Container, Row, Button, Nav } from "react-bootstrap";
import Blog3 from "../../../images/undraw_coding_re_iv62.svg";
import "./Banner.css";
import Typewriter from "typewriter-effect";
import { Link, NavLink } from "react-router-dom";
import Particles from "react-tsparticles";
import { useHistory } from "react-router-dom";
import "pathseg";
import image1 from './../../../images/cover-removebg-preview.png';
// import image2 from './../../../images/assignment12.png';

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

//   var style = {
//     width: "100vw",
//     height: "100vh",
// };


  return (
    <div  className="banner">
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 60,
                duration: 2.5,
                opacity: 0.5,
                size: 40,
              },
              push: {
                quantity: 6,
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 50,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "images",
              "stroke": {
                "width": 0,
                "color": "#000"
              },
              images:[{src:image1, height:50,width:50},{src:image2, height:50,width:50}],
            },
            size: {
              random: true,
              value: 50,
            },
          },
          detectRetina: true,
          
        }}
      /> */}

<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 60,
                duration: 2.5,
                opacity: 0.5,
                size: 40,
              },
              push: {
                quantity: 6,
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: true,
        }}
      />
      <Container>
        <div style={{ padding: "150px 0px",marginTop:'70px' }}>
          <Row className='g-4'>
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

                <h3 style={{ color: "rgb(140, 236, 183)",marginBottom:'10px' }}>
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

                <Nav.Link
                  style={{
                    borderRadius: "10px",
                    padding: "10px 35px",
                    marginTop: "30px",
                    border: "none",
                    fontWeight:'500',
                    textDecoration: "none",
                    width: "125px",
                  }}
                  className="clr-code"
                  download
                  target="_blank"
                  href="https://drive.google.com/file/d/1sSgJ96jnMrLnjFBA3m5_LYako40PYpJC/view?fbclid=IwAR0cMBbmax5fMvklZgjl3jBS-7eBpr2U2bGCRkCky4ltqNCz-2fRJ3EkW2A"
                >
                  Resume
                </Nav.Link>
                <div className="d-flex justify-content-start alignItems-center mt-2">
                  <Nav.Link
                    style={{
                      borderRadius: "20px",
                      marginRight: "15px",
                      fontSize: "30px",
                      border: "none",
                      padding: "0px",
                      textDecoration: "none",
                    }}
                    className="icon-color"
                    target="_blank"
                    href="https://www.linkedin.com/in/md-mahmudul-hasan-1a8145227/"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                  </Nav.Link>

                  <Nav.Link
                    style={{
                      borderRadius: "20px",
                      marginRight: "15px",
                      fontSize: "30px",
                      border: "none",
                      padding: "0px",
                      textDecoration: "none",
                    }}
                    className="icon-color"
                    download
                    target="_blank"
                    href="https://www.facebook.com/hasanmahmudraju.raju"
                  >
                    <i
                      class="fa-brands fa-facebook "
                    ></i>
                  </Nav.Link>
                  <Nav.Link
                    style={{
                      borderRadius: "20px",
                      padding: "0px",
                      fontSize: "30px",
                      border: "none",
                      textDecoration: "none",
                    }}
                    className="icon-color"
                    download
                    target="_blank"
                    href="#"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </Nav.Link>
                </div>
              </div>
            </Col>

            <Col sm={6}>
              <img style={{ width: "100%", height:"100%" }} src={Blog3} alt="portfolio.png" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Banner;

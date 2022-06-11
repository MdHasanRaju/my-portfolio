import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Flip,
  Fade,
  JackInTheBox,
  Slide,
  Bounce,
  Zoom,
  Rotate,
  Roll,
  Hinge,
} from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { NavHashLink as NavLink } from 'react-router-hash-link';
import me from "../../../images/sea1.jpg";
import './AboutMe.css';
import { Button } from "react-bootstrap";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1500,
      easing: "ease",
    });
  });

  const line = {
    borderBottom: "1px solid white",
    height: "1px",
    width: "40px",
    marginX: "auto",
    display: "inline-block",
    marginBottom: "3px",
  };

  return (
    <div id="about" style={{ margin: "130px 0px" }} class="bg-dark py-5">
      <div class="container">
        <div class="text-center text-white pb-4">
          <Fade triggerOnce={true} smooth={true} spy="true" duration={2000}>
            <h1 className="title">ABOUT ME</h1>
            <div>
              <div style={line}></div>
              <span>who i am</span>
              <div style={line}></div>
            </div>
          </Fade>
        </div>
        <div class="row gy-sm-3  pb-5">
          <div class="col-lg-6 col-sm-6 mb-3">
            <Rotate triggerOnce={true} smooth={true} spy="true" duration={2000}>
              <div>
                {" "}
                <img width="350px" src={me} alt="" />
              </div>
            </Rotate>
          </div>
          <div class="col-lg-6 col-sm-6 text-white my-auto">
            <Rotate triggerOnce={true}>
              <h3>
                I'm an UI designer and MERN stack developer from Dhaka,
                Bangladesh.{" "}
              </h3>
              <p>
                I enjoy talking complex and turning them into simple and
                beautiful interface designs. I also love logic and structure of
                coding and always strive to write efficient and elegant code,
                whether it be html, css, js or react. I also feel free to make
                full-stack website.{" "}
              </p>
              <Link to="/#">
                <button className="btn btn-success mt-4">Hire Me</button>
              </Link>
            </Rotate>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

import React from "react";
import Mailer from "../Mailer/Mailer";
import { Fade, Slide } from "react-awesome-reveal";
import "./Demo.css";

const Demo = () => {
  const line = {
    borderBottom: "1px solid black",
    height: "1px",
    width: "40px",
    marginX: "auto",
    display: "inline-block",
    marginBottom: "3px",
  };

  return (
    <div className="contact" id="contact">
      {/* contact_header */}
      <div className="text-center pb-5">
        <Slide
          triggerOnce={true}
          smooth={true}
          spy="true"
          duration={2000}
          direction="down"
        >
          <h1 className="title">CONTACT ME</h1>
        </Slide>
        <Fade triggerOnce={true} smooth={true} spy="true" duration={2000}>
          <div>
            <div style={line}></div>
            <span>Get In Touch</span>
            <div style={line}></div>
          </div>
        </Fade>
      </div>
      <div className="container">
        {/* contact_body */}
        <div className="row ">
          {/* contact_bodyRight */}
          <div className="col-lg-5  ">
            <Mailer />
            {/* <Fade bottom>
            <a
              href="https://www.instagram.com/accounts/login/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="footer_icon" />
            </a>
            <a
              href="https://twitter.com/hhhrrrttt222111"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="footer_icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/hhhrrrttt222111/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="footer_icon" />
            </a>
            <a
              href="https://facebook.com/hhhrrrttt222111"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="footer_icon" />
            </a>
            <a
              href="https://github.com/hhhrrrttt222111"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="footer_icon" />
            </a>
            <a
              href="https://www.reddit.com/user/hhhrrrttt222111"
              target="_blank"
              rel="noreferrer"
              className="d-none"
            >
              <FaRedditAlien className="footer_icon" />
            </a>
            <a
              href="https://hackzism.blogspot.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaBloggerB className="footer_icon" />
            </a>
          </Fade> */}
          </div>
          {/* contact_bodyLeft */}
          <div className="col-lg-7">
            <div className="contact_details">
              <h2>Md. Mahmudul Hasan</h2> <br />
              <h4 className="fw-bold">
                <span className="bold-effect ">AGE:</span> 24
              </h4>
              <h4 className="fw-bold">
                <span className="bold-effect ">COUNTRY:</span> BANGLADESH
              </h4>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://goo.gl/maps/6Lt8Q8s6CUn3RcNR6"
                target="blank"
                rel="noopener noreferrer"
              >
                <h4 className="fw-bold text-uppercase">
                  <span className="bold-effect">ADDRESS</span>: Staff Quarter,
                  Demra, Dhaka - 1361,
                </h4>
              </a>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="tel:918281627763"
              >
                <h4 className="fw-bold text-uppercase">
                  <span className="bold-effect">PHONE:</span> +8801517140853
                </h4>
              </a>
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="mailto:hemanththanal@gmail.com"
              >
                <h4>
                  <span className="bold-effect">EMAIL:</span>{" "}
                  mdhasanraju2017@gmail.com
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

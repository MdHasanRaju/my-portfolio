import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        paddingTop: "40px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <a
          className="tggle"
          style={{ color: "white" }}
          target="_blank"
          href="https://www.facebook.com/hasanmahmudraju.raju"
        >
          <i className="fab fa-facebook me-4 fs-3"></i>
        </a>
        <a
          className="tggle"
          style={{ color: "white" }}
          target="_blank"
          href="https://www.linkedin.com/in/md-mahmudul-hasan-1a8145227/"
        >
          <i className="fab fa-linkedin me-4 fs-3"></i>
        </a>
        <a
          className="tggle"
          style={{ color: "white" }}
          target="_blank"
          href="https://github.com/MdHasanRaju"
        >
          <i className="fab fa-github me-4 fs-3"></i>
        </a>
      </div>

      <div
        style={{ textAlign: "center", marginTop: "10px", paddingBottom: "4px" }}
      >
        <p>
          Copyright © 2021{" "}
          <span className="footer" style={{ fontWeight: "bold" }}>
            Programmer
          </span>{" "}
          Md. Mahmudul Hasan All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div style={{backgroundColor:"black", color:"white", paddingTop:"30px", marginTop:"30px"}}>
      <div style={{ textAlign: "center"}}>
        <i className="fab fa-facebook me-4 fs-3"></i>
        <i className="fab fa-linkedin me-4 fs-3"></i>
        <i className="fab fa-github me-4 fs-3"></i>
      </div>

      <div style={{textAlign:"center", marginTop:"10px", paddingBottom:"4px"}}>
        <p>Copyright © 2021 <span className="footer" style={{fontWeight:"bold"}}>Programmer</span> Md. Mahmudul Hasan All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;

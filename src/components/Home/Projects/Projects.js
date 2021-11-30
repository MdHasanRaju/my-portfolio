import  React, { useEffect } from 'react';

import './Projects.css';
import { Card, Col, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import a10 from '../../../images/assignment-10.png'
import a11 from '../../../images/a11.png'
import a12 from '../../../images/assignment12.png'


const Projects = () => {

  useEffect(() => {
    AOS.init({
      offset:100,
      duration:1300,
      easing:'ease'
    });
  })

    return (
        <div className="container mx-auto my-5">
            <h1 className="text-center mb-4  title" data-aos="fade-down">PROJECTS</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col" data-aos="fade-right">
    <div class="card h-100" style={{backgroundColor:"#191919", color:"white"}}>
      <img src={a12} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">THE ALL-NEW STYLISH AND MODERN</h5>
        <p class="card-text">This is a completely MERN stack project. It is also a Niche related website. Here, customer/user dashboard and admin dashboard are included.</p>
      </div>
      <div class="card-footer clr-code" >
        <a target="_blank" className="text-decoration-none " href="https://assignment-12-76cbb.web.app/"><small class="text-dark">Visit Site</small></a>
      </div>
    </div>
  </div>
  <div class="col" data-aos="fade-up">
    <div class="card h-100 " style={{backgroundColor:"#191919", color:"white"}}>
      <img src={a11} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">EXPLORE-NEW-WORLDS-WITH-US</h5>
        <p class="card-text">This is a tourism website. Here, An User can pre-book Any tour package.</p>
      </div>
      <div class="card-footer clr-code">
      <a target="_blank" className="text-decoration-none" href="https://explore-new-worlds-with-us.web.app/"><small class="text-dark">Visit Site</small></a>
      </div>
    </div>
  </div>
  <div class="col" data-aos="fade-left">
    <div class="card h-100" style={{backgroundColor:"#191919", color:"white"}}>
      <img src={a10} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">BEST-HOSPITALS-IN-BANGLADESH</h5>
        <p class="card-text">It is a Information based website. A stranger can find his targeted hospital's information through this website. Here, Some best Hospitals information and details are available..</p>
      </div>
      <div class="card-footer clr-code">
      <a target="_blank" className="text-decoration-none" href="https://best-hospitals-in-bangladesh.web.app/"><small class="text-dark">Visit Site</small></a>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Projects;
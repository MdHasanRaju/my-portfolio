import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import me from '../../../images/sea1.jpg';

const AboutMe = () => {

    useEffect(() => {
        AOS.init({
          offset:100,
          duration:1200,
          easing:'ease'
        });
      })

    return (
        
        <div id="about" style={{margin:"100px 0px"}} class="bg-dark py-5">
        <div class="container">
            <div class="text-center text-white pb-3" data-aos="fade-down">
                <h1>ABOUT ME</h1>
                <p>----who i am----</p>
            </div>
            <div class="row pb-5">
                <div class="col-lg-6 mb-3" data-aos="flip-right" >
                    <img width="350px" src={me} alt=""/>
                </div>
                <div  class="col-lg-6 text-white my-auto" data-aos="flip-left">
                    <h3>I'm an UI designer and MERN stack developer from Dhaka, Bangladesh. </h3>
                    <p>I enjoy talking complex and turning them into simple and beautiful interface designs. I also love logic and structure of coding and always strive to write efficient and elegant code, whether it be html, css, js or react. I also feel free to make full-stack website. </p>
                    <Link to="/contact"><button className="btn btn-success">Contact Me</button></Link>
                </div>
            </div>

        </div>
    </div>

    );
};

export default AboutMe;
import React, { useState, useEffect } from "react";
import ProgressBar from "react-animated-progress-bar";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Fade, Slide } from "react-awesome-reveal";

// let progressInterval = null;

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 1300,
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

  // const [ progress ,setProgress] = useState(0);

  // useEffect(()=> {
  //     progressInterval = setInterval(() => {
  //         setProgress(prev => prev + 1);
  //     }, 80);
  // }, [])

  // useEffect(()=> {
  //    if (progress >= 80) {
  //        clearInterval(progressInterval);
  //    }
  // }, [progress])

  return (
    //        <> <div className='progress w-50' style={{height:30}}>
    //        <div  className="progress-bar bg-success progress-bar-striped progress-bar-animated " role="progressbar" style={{width:`${progress}%`}}>{progress}%</div>
    //    </div>, <div className='progress w-50' style={{height:30}}>
    //             <div  className="progress-bar bg-success progress-bar-striped progress-bar-animated " role="progressbar" style={{width:`${progress}%`}}>{progress}%</div>
    //         </div></>

    // <div className="container">
    //   <ProgressBar
    //     width="500px"
    //     height="15px"
    //     rect
    //     fontColor="gray"
    //     percentage="90"
    //     rectPadding="1px"
    //     rectBorderRadius="20px"
    //     trackPathColor="transparent"
    //     backgroundColor="transparent"
    //     trackBorderColor="grey"
    //   />
    //   <ProgressBar
    //     width="500px"
    //     height="15px"
    //     rect
    //     fontColor="gray"
    //     percentage="80"
    //     rectPadding="1px"
    //     rectBorderRadius="20px"
    //     trackPathColor="transparent"
    //     backgroundColor="transparent"
    //     trackBorderColor="grey"
    //   />
    //   <div className="">
    //     <strong style={{ marginTop: "-10px" }}>REACT</strong>
    //     <ProgressBar
    //       width="500px"
    //       height="15px"
    //       rect
    //       fontColor="gray"
    //       percentage="70"
    //       rectPadding="1px"
    //       rectBorderRadius="20px"
    //       trackPathColor="transparent"
    //       backgroundColor="transparent"
    //       trackBorderColor="grey"
    //     />
    //   </div>
    // </div>

    <section className="skill-section bg-dark py-5 text-light">
      <div className="container">
        <div className="skill-title text-center mb-5">
          <Slide
            triggerOnce={true}
            smooth={true}
            spy="true"
            duration={2000}
            direction="right"
          >
            <h1 className="title">MY SKILLS</h1>
          </Slide>
          <Slide triggerOnce={true} smooth={true} spy="true" duration={2000}>
            <div>
              <div style={line}></div>
              <span>what i know</span>
              <div style={line}></div>
            </div>
          </Slide>
        </div>

        <div className="skill-clm row g-4">
          <div className="skill-content mt-3 col-lg-5 line-height-5">
            <h3>My creative skills &amp; experiences.</h3>
            <p className="lh-lg">
              I'm obsessed with making things and even more obsessed with making
              things better. I've been in the web development field since 2021.
              I've designed several websites.My specialty is front-end web
              development. Making figma to HTML and turning it into beautiful
              design, semantic HTML CSS3. Moreover, I've created some MERN stack
              projects. Besides mentioned skills with the percentage, I have
              experience in <u>Bootstrap</u>, <u>React Bootstrap</u>,
              <u>Tailwind</u>, <u>ES6</u>, <u>MUI</u>,{" "}
              <u>Firebase Authentication</u>, <u>React-router-dom</u>,{" "}
              <u>Github</u>, <u>Netlify</u>, <u>Heroku</u>, <u>Node JS</u>,{" "}
              <u>Redux</u>,<u>TypeScript </u>, <u>API</u>,{" "}
              <u>Some react libraries</u>.
            </p>
            <NavHashLink to="/home/#about">
              <button className="btn btn-success mt-4">Read more</button>
            </NavHashLink>
          </div>

          <div className="skill-content col-lg-7">
            <div className="info">
              <span className="lang">HTML</span>
              <span>
                <ProgressBar
                  width="100%"
                  height="15px"
                  rect
                  fontColor="gray"
                  percentage="90"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  backgroundColor="transparent"
                  trackBorderColor="grey"
                />
              </span>
            </div>

            <div className="info">
              <span className="lang">CSS</span>
              <span>
                <ProgressBar
                  width="100%"
                  height="15px"
                  rect
                  fontColor="gray"
                  percentage="80"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  backgroundColor="transparent"
                  trackBorderColor="grey"
                />
              </span>
            </div>

            <div className="info">
              <span className="lang">JAVASCRIPT</span>
              <span>
                <ProgressBar
                  width="100%"
                  height="15px"
                  rect
                  fontColor="gray"
                  percentage="75"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  backgroundColor="transparent"
                  trackBorderColor="grey"
                />
              </span>
            </div>

            <div className="info">
              <span className="lang">REACT</span>
              <span>
                <ProgressBar
                  width="100%"
                  height="15px"
                  rect
                  fontColor="gray"
                  percentage="85"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  backgroundColor="transparent"
                  trackBorderColor="grey"
                />
              </span>
            </div>

            <div className="info">
              <span className="lang">EXPRESS JS</span>
              <span>
                <ProgressBar
                  width="100%"
                  height="15px"
                  rect
                  fontColor="gray"
                  percentage="70"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  backgroundColor="transparent"
                  trackBorderColor="grey"
                />
              </span>
            </div>
            <div className="info">
              <span className="lang">Mongodb</span>
              <span>
                <ProgressBar
                  width="100%"
                  height="15px"
                  rect
                  fontColor="gray"
                  percentage="75"
                  rectPadding="1px"
                  rectBorderRadius="20px"
                  trackPathColor="transparent"
                  backgroundColor="transparent"
                  trackBorderColor="grey"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Services.css";
import { Fade, JackInTheBox, Slide, Bounce, Zoom, Rotate, Roll, Flip} from "react-awesome-reveal";

function Services() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1200,
      easing: "ease",
    });
  });

  return (
    <div className="service component__space" id="Services">
      <div style={{textAlign:"justify"}} className="heading mb-5">
        <Fade>
          <h1 className="heading">MY SERVICES</h1>
          <p className="heading p__color">
            There are many variations of passages of Lorem Ipsum available,
          </p>
          <p className="heading p__color">
            but the majority have suffered alteration.
          </p>
        </Fade>
      </div>

      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            <Roll><div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
                  <line x1="2" y1="20" x2="2" y2="20"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Business Strategy</h1>
                <p className="p service__text p__color">
                  I throw myself down among the
                </p>
                <p className="p service__text p__color">
                  tall grass by the stream as I lie
                </p>
                <p className="p service__text p__color">close to the earth.</p>
              </div>
            </div></Roll>
          </div>

          <div className="col-lg-4 col-sm-6">
            <Flip><div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Website Development</h1>
                <p className="p service__text p__color">
                  Web development is the work involved in developing a website
                  for the Internet or an intranet.
                </p>
              </div>
            </div></Flip>
          </div>

          <div className="col-lg-4 col-sm-6">
            <Bounce><div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Marketing & Reporting</h1>
                <p className="p service__text p__color">
                  Marketing reporting is the process of gathering actionable
                  data that help you to reach your goals.
                </p>
              </div>
            </div></Bounce>
          </div>

          <div className="col-lg-4 col-sm-6">
            <Slide><div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile App Development</h1>
                <p className="p service__text p__color">
                  Start With Fully-Customizable Flutter Widgets To Develop
                  Native Interfaces In Minutes.
                </p>
              </div>
            </div></Slide>
          </div>

          <div className="col-lg-4 col-sm-6">
            <Zoom><div className="service__box pointer">
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Mobile-Optimised Website</h1>
                <p className="p service__text p__color">
                  A mobile optimized site is a far more advanced website. We
                  make responsive website
                </p>
              </div>
            </div></Zoom>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="service__box pointer">
            <Bounce>
              <div className="icon">
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div className="service__meta">
                <h1 className="service__text">Membership System</h1>
                <p className="p service__text p__color">
                  Our Membership automates the management of membership within
                  associations, organizations.
                </p>
              </div>
              </Bounce>
            </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default Services;

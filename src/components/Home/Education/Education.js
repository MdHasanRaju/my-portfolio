import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="edu_cation">
      <div className="educationWrapper">
        <div className="workheading">Education</div>

        <div className="timeline mx-auto">
          <ul>
            <li>
              <div className="content">
                <h3>Junior School Certificate</h3>
                <p>MA Sattar Adarsho Uccho Biddaloy</p>
                <p>Completed JSC From Sattar School, Dhaka</p>
              </div>
              <div
                className="time"
                style={{
                  border: `2px solid #E2E8F0`,
                  color: "#263859",
                }}
              >
                <h4>Jan - Dec 2012</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <h3>Secondary School Certificate</h3>
                <p>MA Sattar Udarsho Uccho Biddaloy</p>
                <p>Completed SSC From Sattar School, Dhaka.</p>
              </div>
              <div
                className="time"
                style={{
                  border: `2px solid #E2E8F0`,
                  color: "#263859",
                }}
              >
                <h4>Jan - Feb 2013 - 2014</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <h3>Higher Secondary Certificate</h3>
                <p>Hazi Abdul Latif Bhuiya College</p>
                <p>Completed HSC from Latif College, Dhaka.</p>
              </div>
              <div
                className="time"
                style={{
                  border: `2px solid #E2E8F0`,
                  color: "#263859",
                }}
              >
                <h4>Sep - May 2015-2016</h4>
              </div>
            </li>
            <li>
              <div className="content">
                <h3>B.Sc Honors In Zoology</h3>
                <p>Govt. Tolaram College, Narayangonj.</p>
                <p>Completed B.Sc With 1st Class From This College,Narayangonj, Dhaka</p>
              </div>
              <div
                className="time"
                style={{
                  border: `2px solid #E2E8F0`,
                  color: "#263859",
                }}
              >
                <h4>Jan - Feb 2013 - 2014</h4>
              </div>
            </li>

            <div style={{ clear: "both" }}></div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;

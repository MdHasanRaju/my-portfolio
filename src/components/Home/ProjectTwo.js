import React from 'react';
import img1 from '../../images/s1.png';
import img2 from '../../images/s2.png';
import img3 from '../../images/s3.png';
import img4 from '../../images/d1.png';
import ProjectTwoDetails from './ProjectTwoDetails/ProjectTwoDetails';

const data = [
    {
        id:"1",
        title:"place order system by login",
        desc:"To book an order an user needs to be logged in. Google login also added Here. User can choose his choice package and he also can book it.",
        img:img1
    },
    {
        id:"2",
        title:"Dashboard and add new package",
        desc:"There is a global dashboard. Anybody can add any package to the website. There is no specific security for the function. This is that part where user can control it. This project is also a MERN stack project.",
        img:img2
    },
    {
        id:"3",
        title:"React timer ",
        desc:"In the home page of the website, there is a session named new session. There is a timer for new session arrivals. After a certain time session be ended. New session will launched.",
        img:img4
    }
]

const ProjectTwo = () => {
    return (
        <>
        <div style={{marginTop:"80px"}} class="row row-cols-1 row-cols-md-3 g-4">
            {
                data.map(d => <ProjectTwoDetails data={d}></ProjectTwoDetails>)
            }
        </div>
        <div className="text-center">
            <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://explore-new-worlds-with-us.web.app/">Live-Site</a>
            <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://github.com/MdHasanRaju/tourism-client-site">Frontend-code</a>
            <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://github.com/MdHasanRaju/tourism-server-site">Backend-code</a>
        </div>
        </>
    );
};

export default ProjectTwo;
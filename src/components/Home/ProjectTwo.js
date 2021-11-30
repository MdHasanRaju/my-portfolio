import React from 'react';
import img1 from '../../images/s1.png';
import img2 from '../../images/s2.png';
import img3 from '../../images/s3.png';
import ProjectTwoDetails from './ProjectTwoDetails/ProjectTwoDetails';

const data = [
    {
        id:"1",
        title:"place order system",
        desc:"The website is a pre tour package booking website. Here, user can choose his/her choice package and he/she also can book it through login.",
        img:img1
    },
    {
        id:"2",
        title:"Add new package system",
        desc:"User can add any package to website. There is no specific security for the function. This is that part where user can control it. This project is also a MERN stack project.",
        img:img2
    },
    {
        id:"3",
        title:"Dashboard",
        desc:"There is global dashboard. User can add or delete any package. User can handle  Manage all orders functions. There is no restrictions for anyone.",
        img:img3
    }
]

const ProjectTwo = () => {
    return (
        <>
        <div class="row row-cols-1 row-cols-md-3 g-4 my-4">
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
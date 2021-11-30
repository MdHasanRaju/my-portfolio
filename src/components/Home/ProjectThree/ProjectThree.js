import React from 'react';
import img1 from '../../../images/s8.png';
import img2 from '../../../images/s9.png';
import img3 from '../../../images/s10.png';
import ProjectThreeDetails from '../ProjectThreeDetails/ProjectThreeDetails';


const data = [
    {
        id:"1",
        title:"Hospital details section",
        desc:"The website is a pre tour package booking website. Here, user can choose his/her choice package and he/she also can book it through login.",
        img:img1
    },
    {
        id:"2",
        title:"Most frequently asked questions",
        desc:"User can add any package to website. There is no specific security for the function. This is that part where user can control it. This project is also a MERN stack project.",
        img:img2
    },
    {
        id:"3",
        title:"Login system",
        desc:"There is global dashboard. User can add or delete any package. User can handle  Manage all orders functions. There is no restrictions for anyone.",
        img:img3
    }
]

const ProjectThree = () => {
    return (
        <>
        <div class="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
                data.map(d => <ProjectThreeDetails data={d}></ProjectThreeDetails>)
            }
        </div>
        <div className="text-center">
        <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://best-hospitals-in-bangladesh.web.app/">Live-Site</a>
        <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://github.com/MdHasanRaju/best-hospitals-in-bd">Github-code</a>
        
    </div>
    </>
    );
};

export default ProjectThree;
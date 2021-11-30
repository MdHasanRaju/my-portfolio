import React from 'react';
import img1 from '../../../images/s8.png';
import img2 from '../../../images/s9.png';
import img3 from '../../../images/s10.png';
import ProjectThreeDetails from '../ProjectThreeDetails/ProjectThreeDetails';


const data = [
    {
        id:"1",
        title:"Hospital details section",
        desc:"Here an user can find his/her desired hospital's location and details information as he is looking for. To get details information he/she has to be logged in.",
        img:img1
    },
    {
        id:"2",
        title:"Most frequently asked questions",
        desc:"Most asked questions' ans have been given in this website about hospitals. So,  that an user can get most asked question's ans easily.",
        img:img2
    },
    {
        id:"3",
        title:"Login system",
        desc:"Through this login system we improve our system an user can get flexible service instantly. This website provides proper guideline and instruction to a user who looks for best hospital.",
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
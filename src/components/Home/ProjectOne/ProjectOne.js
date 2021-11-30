import React from 'react';
import img1 from '../../../images/s4.png';
import img2 from '../../../images/s5.png';
import img3 from '../../../images/s7.png';
import ProjectOneDetails from '../ProjectOneDetails/ProjectOneDetails';


const data = [
    {
        id:"1",
        title:"Products collection",
        desc:"The following products are available for customers.It is completely a MERN stack project. It is also a Niche related website. Here. Here, user interaction and admin interaction are added.",
        img:img1
    },
    {
        id:"2",
        title:"User order place method",
        desc:"User can purchase any item from the website. User has to be logged in before purchasing any item. He also can comment from his own experience to the website. ",
        img:img2
    },
    {
        id:"3",
        title:"Admin dashboard",
        desc:"Here Admin can make other. All admin functionalities have been applied. An admin can remove any item from home page and also can add any item from his website",
        img:img3
    }
]

const ProjectOne = () => {
    return (
        <>
        <div class="row row-cols-1 row-cols-md-3 g-4 my-4">
            {
                data.map(d => <ProjectOneDetails data={d}></ProjectOneDetails>)
            }
        </div>
        <div className="text-center">
        <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://assignment-12-76cbb.web.app/">Live-Site</a>
        <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://github.com/MdHasanRaju/FASTZone-client-site/">Frontend-code</a>
        <a style={{ marginRight:"10px", fontWeight:"bold"}} target="_blank" href="https://github.com/MdHasanRaju/FASTZone-server-site/">Backend-code</a>
    </div>
        </>
    );
};

export default ProjectOne;
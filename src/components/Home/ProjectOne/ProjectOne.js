import React from 'react';
import img1 from '../../../images/s4.png';
import img2 from '../../../images/s5.png';
import img3 from '../../../images/s7.png';
import ProjectOneDetails from '../ProjectOneDetails/ProjectOneDetails';


const data = [
    {
        id:"1",
        title:"Home overview",
        desc:"This is a completely MERN stack project. It is also a Niche related website. Here",
        img:{img1}
    },
    {
        id:"2",
        title:"login part",
        desc:"This is a completely MERN stack project. It is also a Niche related website. Here",
        img:{img2}
    },
    {
        id:"3",
        title:"Admin dashboard",
        desc:"This is a completely MERN stack project. It is also a Niche related website. Here",
        img:{img3}
    }
]

const ProjectOne = () => {
    return (
        <div>
            {
                data.map(d => <ProjectOneDetails data={d}></ProjectOneDetails>)
            }
        </div>
    );
};

export default ProjectOne;
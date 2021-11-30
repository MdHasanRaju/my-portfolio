import React from 'react';

const ProjectOneDetails = ({d}) => {
    const {id, img, desc, title} = d;
    return (
        <div>
            <h2>{desc}</h2>
        </div>
    );
};

export default ProjectOneDetails;
import React from 'react';

const ProjectTwoDetails = ({data}) => {
    const {id, img, desc, title} = data;
    console.log(data);

    return (
        <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{desc}</p>
      </div>
    </div>
  </div>
    );
};

export default ProjectTwoDetails;
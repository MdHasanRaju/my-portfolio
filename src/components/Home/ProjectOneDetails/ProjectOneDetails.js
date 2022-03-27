import React from 'react';

const ProjectOneDetails = ({data}) => {
    const {img, desc, title, way} = data;
    return (
    <div class="col">
    <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">By logging <strong>{way}</strong> {desc}</p>
      </div>
    </div>
  </div>
    );
};

export default ProjectOneDetails;
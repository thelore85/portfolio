import React from 'react';
import Card from '../Card/Card.js';
import './ProjectList.css';


const ProjectList = ({ project }) => {
  return (
    <div className="project-card-container">

      {
        project.map((el,i) => {
            return  ( <Card
            key={project[i].id} 
            id = {project[i].id}
            title = {project[i].title}
            description = {project[i].description}
            color = {project[i].color}
            tag = {project[i].tag}
            gitCode = {project[i].gitCode}
            gitPage={project[i].gitPage !== '' ? project[i].gitPage : ''}
          /> )
        
        })
      }

    </div>
  )
}


export default ProjectList;
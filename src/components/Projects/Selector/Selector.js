import React from 'react';
import './Selector.css';


const Selector = ({ onProjcetSelection, projectSelected }) =>{

  return(

  <section id='selector'>
    <div className='wrapper'>

    <div className="project-title">
      <span>Projects</span>
      <p>Check out my open-source <span>code repository</span> </p>
    </div>

    <div className="selector-wrapper"> 

      {/* <svg id="arrow" xmlns="http://www.w3.org/2000/svg" width="100" height="66" viewBox="0 0 100 66" fill="none">
        <path d="M27 11.5L67.5 30L5 54" stroke="black" stroke-width="25"/>
      </svg> */}

      <svg className="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 63" fill="none">
        <path d="M4 53L28.5 45M28.5 45L61.5 29L17 16L28.5 45Z" stroke="black" strokeWidth="20"/>
      </svg>

      <select className="selector" onChange={onProjcetSelection} value={projectSelected}>    
        <option className="category" value="none">Select a category</option>
        <option className= "category" value="" >All Project</option>
        <option className= "category" value="project" >Web Application</option>
        {/* <option className= "category" value="api"> API and Machine Learning</option> */}
        {/* <option className= "category" value="style">Design System and Typo</option> */}
        <option className= "category" value="component">Components</option>
        <option className= "category" value="template">Templates</option>
      </select>

    </div>
    </div>
  </section>

    
  )
}

export default Selector;
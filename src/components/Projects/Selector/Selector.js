import React from 'react';
import './Selector.css';


const Selector = ({ onProjcetSelection, projectSelection }) =>{

  return(

  <section id='selector'>
    <div className='wrapper'>

    <div className="project-title">
      <span>Projects</span>
      <p>My <span>open-source code</span> repository</p>
    </div>

    <div className="selector-wrapper">

      <select className="selector" onChange={onProjcetSelection} value={projectSelection}>    
        <option className= "level" value="" >All Project</option>
        <option className= "level" value="project" >Web Application</option>
        {/* <option className= "level" value="api"> API and Machine Learning</option> */}
        {/* <option className= "level" value="style">Design System and Typo</option> */}
        <option className= "level" value="component">Components</option>
        <option className= "level" value="template">Templates</option>
      </select>

    </div>
    </div>
  </section>

    
  )
}

export default Selector;
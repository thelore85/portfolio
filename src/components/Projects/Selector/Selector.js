import React from 'react';
import './Selector.css';


const Selector = ({ onProjcetSelection }) =>{
  return(

  <section id='selector'>
    <div className='wrapper'>

    <div className="project-title">
      <span>Projects</span>
      <p>My <span>open-source code</span> repository</p>
    </div>

    <div className="selector-wrapper">
      <select className="selector" onChange={onProjcetSelection}>
        <option className= "level" value="" defaultValue>All Projects</option>
        <option className= "level" value="react">Web App</option>
        <option className= "level" value="api"> AI / API integration</option>
        <option className= "level" value="sql">Server and Data Base</option>
        <option className= "level" value="css">Design System and Typografy</option>
        <option className= "level" value="component">Components</option>
        <option className= "level" value="template">Templates</option>
      </select>
    </div>
    </div>
  </section>

    
  )
}

export default Selector;
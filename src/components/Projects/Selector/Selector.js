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
        <option className= "level" value="web-app">Web Application</option>
        <option className= "level" value="machine-learning"> AI / Machine Learning</option>
        <option className= "level" value="api">API integration</option>
        <option className= "level" value="sql">Back-end</option>
        <option className= "level" value="css">CSS & Typografy</option>
        <option className= "level" value="component">Components</option>
        <option className= "level" value="template">Templates</option>
      </select>
    </div>
    </div>
  </section>

    
  )
}

export default Selector;
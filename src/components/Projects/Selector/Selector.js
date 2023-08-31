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
        <option className= "level" value="react">react</option>
        <option className= "level" value="machine-learning">Machine Learning</option>
        <option className= "level" value="css">css</option>
        <option className= "level" value="api">API</option>
        <option className= "level" value="sql">SQL</option>
        <option className= "level" value="component">Components</option>
      </select>
    </div>
    </div>
  </section>

    
  )
}

export default Selector;
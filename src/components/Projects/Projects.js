import React, { Component } from 'react';
import Selector from './Selector/Selector.js';
import ProjectList from './ProjectList/ProjectList.js'
import { pjt } from '../../db.js';

import './Projects.css';


class Projects extends Component {

  constructor(){
    super()
    this.state = {
      db : pjt,
      projectSelection : '',
    }
  }


  onProjcetSelection = (event) => {
    this.setState({
      projectSelection : event.target.value
    })
  }

  render(){

    // DATABASE FILTERED by selector selection
    let filteredProject = 
    this.state.db.filter( (value, index) =>{
    return value.tag.toString().includes(this.state.projectSelection)
    })

    return(
      <section id="project">
        <div className="no-wrapper">

            <Selector onProjcetSelection = {this.onProjcetSelection}/>
            <ProjectList project = {filteredProject}/>

        </div>
      </section>
    )
  }
}

export default Projects;
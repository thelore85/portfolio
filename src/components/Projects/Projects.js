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

    let filteredProject = 
    this.state.db.filter( (value, index) =>{ //value represent the object of the db array
    return value.tag.toString().includes(this.state.projectSelection)
    })

    console.log('deb filtered proj:', filteredProject)
    console.log('deb proj db:', pjt)



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
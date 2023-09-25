import React, { Component } from 'react';
import Selector from './Selector/Selector.js';
import ProjectList from './ProjectList/ProjectList.js'
import { pjt } from '/public/db.js';

import './Projects.css';


class Projects extends Component {

  constructor(){
    super()
    this.state = {
      db : pjt,
      projectSelected : '',
    }
  }

  componentDidMount(){
    // Personalized url filtering
    var url = window.location.search;
    var urlParams = new URLSearchParams(url);
    var filter = urlParams.get('filter');

    // URL PERSONALIZATION TEMPLATE: http://localhost:9000/?filter=project#project
    if(filter){
      this.setState({
        projectSelection: filter,
      })
    }
  }

  onProjcetSelection = (event) => {
    this.setState({
      projectSelection : event.target.value
    })
  }

  render(){

    // DATABASE FILTERED by selector selection
    let filteredProject = this.state.db.filter( (value, index) =>{
      return value.tag.toString().includes(this.state.projectSelection)
    })

    return(
      <section id="project">
        <div className="no-wrapper">

            <Selector onProjcetSelection = {this.onProjcetSelection} projectSelected = { this.state.projectSelection}/>
            <ProjectList project = {filteredProject}/>

        </div>
      </section>
    )
  }
}

export default Projects;
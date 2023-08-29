import React from 'react';
import './Projects.css';

const Projects = () => {
  return(
    <section id="project">
      <div className="">


          <div className="project-title">
            <span>Projects</span>
            <p>My <span>portfolio</span> and <span>open-source</span> components</p>
          </div>

          <div className="project-filter">
            <input type='serch' placeholder='select a project'></input>
          </div>


          {/* PROJECT CARDS */}
          <div className="project-card-container">
 

            <div className='project-card-wrapper'>
            <div className='project-card'>
              <div className="project-color" style={{background: "magenta"}}></div>
              <div className='project-card-content'>
                <h3>Image Recognition App</h3>
                <p>React endeavor for image recognition, I orchestrated the fusion of cutting-edge AI through APIs with a machine learning model.</p>
              </div>

              <div className='project-card-tag'>
                  <ul>
                    <li>#React</li>
                    <li>#Node.js</li>
                    <li>#Express</li>
                    <li>#API</li>
                    <li>#Machine-Learning</li>
                    <li>#SQL</li>
                  </ul>
              </div>

              <button type="button" className="btn btn-secondary"> Git Code</button>
              <button type="button" className="btn btn-secondary">Live Code</button>
            </div>
            </div>

            <div className='project-card-wrapper'>
            <div className='project-card'>
              <div className="project-color" style={{background: "magenta"}}></div>
              <div className='project-card-content'>
                <h3>Image Recognition App</h3>
                <p>React endeavor for image recognition, I orchestrated the fusion of cutting-edge AI through APIs with a machine learning model.</p>
              </div>

              <div className='project-card-tag'>
                  <ul>
                    <li>#React</li>
                    <li>#Node.js</li>
                    <li>#Express</li>
                    <li>#API</li>
                    <li>#Machine-Learning</li>
                    <li>#SQL</li>
                  </ul>
              </div>

              <button type="button" className="btn btn-secondary"> Git Code</button>
              <button type="button" className="btn btn-secondary">Live Code</button>
            </div>
            </div>

            <div className='project-card-wrapper'>
            <div className='project-card'>
              <div className="project-color" style={{background: "magenta"}}></div>
              <div className='project-card-content'>
                <h3>Image Recognition App</h3>
                <p>React endeavor for image recognition, I orchestrated the fusion of cutting-edge AI through APIs with a machine learning model.</p>
              </div>

              <div className='project-card-tag'>
                  <ul>
                    <li>#React</li>
                    <li>#Node.js</li>
                    <li>#Express</li>
                    <li>#API</li>
                    <li>#Machine-Learning</li>
                    <li>#SQL</li>
                  </ul>
              </div>

              <button type="button" className="btn btn-secondary"> Git Code</button>
              <button type="button" className="btn btn-secondary">Live Code</button>
            </div>
            </div>

            <div className='project-card-wrapper'>
            <div className='project-card'>
              <div className="project-color" style={{background: "magenta"}}></div>
              <div className='project-card-content'>
                <h3>Image Recognition App</h3>
                <p>React endeavor for image recognition, I orchestrated the fusion of cutting-edge AI through APIs with a machine learning model.</p>
              </div>

              <div className='project-card-tag'>
                  <ul>
                    <li>#React</li>
                    <li>#Node.js</li>
                    <li>#Express</li>
                    <li>#API</li>
                    <li>#Machine-Learning</li>
                    <li>#SQL</li>
                  </ul>
              </div>

              <button type="button" className="btn btn-secondary"> Git Code</button>
              <button type="button" className="btn btn-secondary">Live Code</button>
            </div>
            </div>

            
            


          </div>


        </div>
    </section>
  )
}

export default Projects;
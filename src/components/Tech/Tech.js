import React from 'react';
import './Tech.css';

const tech = () => {
  return(
    <section id="tech">
      <div className="wrapper">

          <div className="row tech-title">
            <span>Tech</span>
            <p >The best <span>web technology</span> at your support</p>
          </div>


          <div className="row vertical-align">

            <div className="icon-wrapper">
              <i className="fab fa-js"></i>
              <h2 className="tech-name">Javascript</h2>
            </div>
 
            <div className="icon-wrapper">
              <i className="fab fa-react"></i>
              <h2 className="tech-name">react</h2>
            </div>

            <div className="icon-wrapper">
              <i className="fab fa-node-js"></i>
             <h2 className="tech-name">Node Js</h2>
            </div>

            <div className="icon-wrapper">
              <i className="fab fa-python"></i>
              <h2 className="tech-name">Python</h2>
            </div>

            <div className="icon-wrapper">
              <i className="fab fa-wordpress"></i>
              <h2 className="tech-name">Wordpress</h2>
            </div>    


            <div className="icon-wrapper">
            <i className="fab fa-bootstrap"></i>
             <h2 className="tech-name">Bootstrap</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-solid fa-database"></i>
             <h2 className="tech-name">SQL / noSQL</h2>
            </div>

            <div className="icon-wrapper">        
              <i className="fab fa-html5"></i>     
             <h2 className="tech-name">HTML/CSS</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-solid fa-server"></i>
             <h2 className="tech-name">Express js</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fab fa-github"></i>
             <h2 className="tech-name">Git hub</h2>
            </div>

            <div className="icon-wrapper">
              <i className="fa-brands fa-google"></i>
              <h2 className="tech-name">Tag Manager</h2>
            </div>

            <div className="icon-wrapper">
              <i className="fa-brands fa-hubspot"></i>
              <h2 className="tech-name">Hubspot</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-solid fa-chart-line"></i>
             <h2 className="tech-name">Google Analytics 4</h2>
            </div>
          
            <div className="icon-wrapper">
            <i className="fa-brands fa-searchengin"></i>
             <h2 className="tech-name">SEO</h2>
            </div>

            <div className="icon-wrapper">
            <i className="fa-brands fa-figma"></i>
             <h2 className="tech-name">Figma</h2>
            </div>

          </div>


      </div>
    </section>
  )
}

export default tech;
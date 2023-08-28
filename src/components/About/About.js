import React from 'react';
import './About.css';

const About = () => {
  return(
    <section id="about" className="vertical-align">
      <div className="wrapper row vertical-align">

        <div className="img-container col-md-4">
          <img className="img_desktop" src="/about.png" alt='about me'></img>
          <img className="img_mobile" src="/about_mobile.png" alt='about me'></img>
        </div>

        <div className="about-content-wrapper col-md-7">

          <div className="about-title">
            <span id='about'>About me</span>
            <p>More then <span>10 years</span> of digital experties</p>
          </div>

          <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis.</p>
          <p>Integer a est ante. Nulla facilisi. Integer elementum velit at ultricies convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button type="button" className="btn btn-secondary">Download CV</button>
          <button type="button" className="btn btn-secondary">Git Hub</button>
          <button type="button" className="btn btn-primary">Whats App</button>
     
          </div>
    
        </div>

      </div>
    </section>
  )
}

export default About;
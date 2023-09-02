import React from 'react';
import './About.css';
import aboutImage from '/public/img/about.png'
import aboutMobileImage from '/public/img/about_mobile.png'

const About = () => {
  return(
    <section id="about" className="vertical-align">
      <div className="wrapper row vertical-align">

        <div className="img-container col-md-4">
          <img className="img_desktop" src={aboutImage} alt='about me'></img>
          <img className="img_mobile" src={aboutMobileImage} alt='about me'></img>
        </div>

        <div className="about-content-wrapper col-md-7">

          <div className="about-title">
            <span>About me</span>
            <p>More then <span>10 years</span> of digital experties</p>
          </div>

          <div className="about-content">
          <p>I'm a passionate web developer and designer, dedicated to crafting digital experiences that leave a lasting impact. With a blend of creativity and technical prowess, I thrive on translating ideas into visually stunning and highly functional websites. My journey began with a fascination for user-centered design, sparking my pursuit of expertise in UX/UI.</p>
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
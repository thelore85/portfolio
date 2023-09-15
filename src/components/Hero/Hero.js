import React from 'react';
import './Hero.css';

const Hero = () => {
  return(
    <section id="hero">
      <div className="wrapper row vertical-align">
      
        <div className="hero-content">
          <h1>Keep calm and <span>develop</span> a web app</h1>
          <a type="button" className="btn btn-secondary" href="#project">view portfolio</a>
          <a type="button" className="btn btn-primary" href="#about">contact me</a>
        </div>

      </div>
    </section>
  )
}

export default Hero;
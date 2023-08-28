import React from 'react';
import './Hero.css';

const Hero = () => {
  return(
    <section id="hero">
      <div className="wrapper row vertical-align">
        <div className="hero-content">
          <h1>Keep calm and <span>develope</span> a website</h1>
          <button type="button" className="btn btn-secondary">view portfolio</button>
          <button type="button" className="btn btn-primary">contact</button>
        </div>

        <div className="hero-image">
          {/* USING IMAGE BACKGROUND - NOT IMG TAG NEEDED */}
        </div>
      </div>
    </section>
  )
}

export default Hero;
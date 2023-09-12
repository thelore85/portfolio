import React from 'react';
import './About.css';
import aboutImage from '/public/img/about/about.png'
import aboutMobileImage from '/public/img/about/about_mobile.png'
import politecnico from '/public/img/about/politecnico_milano.png'
import geeks from '/public/img/about/4geek_academy.png'
import sole24 from '/public/img/about/sole24ore.png'
import googleAds from '/public/img/about/google_ads_certification.jpeg'
import googleAnalytics from '/public/img/about/google_analytics.png'
import ztm from '/public/img/about/zero_to_masgery_academy.jpeg'

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
            <span className="ancor">About me</span>
            <p>More then <span>10 years</span> of digital experties</p>
          </div>

          <div className="about-content">
            <p>I'm a passionate web developer and designer, dedicated to crafting digital experiences that leave a lasting impact. With a blend of creativity and technical prowess, I thrive on translating ideas into visually stunning and highly functional websites. My journey began with a fascination for user-centered design, sparking my pursuit of expertise in UX/UI.</p>
            {/* <a className="btn btn-secondary" href="asset/lorenzo_garofalo_cv.pdf" target="_blank" >Download CV</a> */}
            <a  className="btn btn-secondary" href="https://github.com/thelore85" target="_blank" >Git Hub</a>
            <a className="btn btn-primary" href="https://wa.me/34615867600" target="_blank" >Whats App</a> 
          </div>

          <div className='about-education'>
          <span className="ancor">Education and Courses</span>
            <img src={politecnico}></img>
            <img src={geeks}></img>
            <img src={sole24}></img>
            <img src={googleAds}></img>
            <img src={googleAnalytics}></img>
            <img src={ztm}></img>
          </div>
    
        </div>

      </div>
    </section>
  )
}

export default About;
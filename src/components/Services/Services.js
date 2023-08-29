import React from 'react';
import './Services.css';

const Services = () => {
  return(
    <section id="service">
      <div className="wrapper">

          <div className="row service-title">
            <span>Services</span>
            <p >Looking for a <span>web developer</span>? you are in the right place</p>
          </div>

          <div className="service-card-wrapper">

            <div className="service-card col-lg-3 col-sm-6 ">
            <svg className='icon' xmlns="http://www.w3.org/2000/svg" width="171" height="93" viewBox="0 0 171 93" fill="none">
              <path d="M120 86L93.5 31.5L164.5 61H60L130.5 20" stroke="#DBDDFD" strokeWidth="32"/>
            </svg>
              <div className='service-content'>
                <h2>web design</h2>
                <p>Craft engaging experiences with intuitive design, maximizing usability and visual appeal to connect your audience seamlessly</p>
              </div>
            </div>

            <div className="service-card col-lg-3 col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="96" height="136" viewBox="0 0 96 136" fill="none">
                <path d="M14.5 116L48 47V88.5L80 47V104.5" stroke="#4D49FF" strokeWidth="32"/>
              </svg>
              <div className='service-content'>
                <h2>Front-end</h2>
                <p>Transform concepts into interactive interfaces through modern technologies, ensuring smooth user experiences that are responsive across all devices</p>
              </div>
            </div>

            <div className="service-card col-lg-3 col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="138" height="122" viewBox="0 0 138 122" fill="none">
                <path d="M59.5 106.5L7 84.5H98L44 33L31 118" stroke="black" strokeWidth="32"/>
              </svg>
              <div className='service-content'>
                <h2>Back-end</h2>
                <p>Build the robust infrastructure behind the scenes, ensuring reliable performance and security, enabling you to manage data and operations effortlessly</p>
              </div>
            </div>

            <div className="service-card col-lg-3 col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="134" height="113" viewBox="0 0 134 113" fill="none">
                <path d="M95.5 98L22 67.5L40 29L76.5 67.5V40.5L118 29V67.5" stroke="#EEEEEE" strokeWidth="32"/>
              </svg>
              <div className='service-content'>
                <h2>Marketing</h2>
                <p>Optimize search visibility, track performance with detailed analytics, and implement CRM systems for effective customer relationship management</p>
              </div>
            </div>

            <div className="service-card col-lg-3 col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="207" height="114" viewBox="0 0 207 114" fill="none">
                <path d="M71 101.5L63.1875 89M63.1875 89L41 53.5L125.5 89V41L170 89H63.1875Z" stroke="#3FD1D2" strokeWidth="32"/>
              </svg>
              <div className='service-content'>
                <h2>CMS</h2>
                <p>Create dynamic and manageable sites using WordPress, offering complete content control to keep your site consistently updated</p>
              </div>
            </div>

            <div className="service-card col-lg-3 col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="162" height="125" viewBox="0 0 162 125" fill="none">
                <path d="M12 109L82.5 39V109H154L12 39" stroke="#FB4D8C" strokeWidth="32"/>
              </svg>
              <div className='service-content'>
                <h2>E-commerce</h2>
                <p>Develop compelling and secure online stores, integrating payments, inventory management, and intuitive navigation to maximize sales</p>
              </div>
            </div>

            <div className="service-card col-lg-3 col-sm-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="130" height="136" viewBox="0 0 130 136" fill="none">
                <path d="M27.5 119.5H92.5L113.5 99.5V25.5L27.5 65L60.5 99.5L86 89L50 25.5" stroke="#DCFFF9" strokeWidth="32"/>
              </svg>
              <div className='service-content'>
                <h2>AI - API</h2>
                <p>Elevate your applications with our AI-API service. integrate AI capabilities like NLP, image recognition, text interpreting and many other features</p>
              </div>
            </div>

          </div>

      </div>
    </section>
  )
}

export default Services;
import React from 'react';
import './Card.css';


const Card = ({ id, title, description, color, gitCode, gitPage, tag, tech }) => {
  

  return(
    <div className="card-wrapper" key={id}>
      <div className='card-component'>
      
        <div className="card-color" style={{ background: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}></div>
        <div className='card-content'>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className='card-tag'>
          <ul>
            { tech.map((el, i) => { return <li key={i}>#{el}</li> }) }
          </ul>
        </div>

        {gitCode !== '' && ( <a className="btn btn-secondary" href={gitCode} target="_blank">Git Code</a>)}
        {gitPage !== '' && ( <a className="btn btn-secondary" href={gitPage} target="_blank">Live Code</a>)}

      </div>
    </div>

  )
}

export default Card;
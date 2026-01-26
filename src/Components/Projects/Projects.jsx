import React from 'react'
import './Projects.css'

import white_arrow from '../../assets/white-arrow.png'

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className="project-icon">
          
        </div>

        <div className="project-description">
          <h1>Coming Soon</h1>
        </div>
      </div>

      <div className='projects-btn'>
        <button className='btn dark-btn'>
          See More Here <img src={white_arrow} alt='' />
        </button>
      </div>
    </>
  )
}

export default Projects

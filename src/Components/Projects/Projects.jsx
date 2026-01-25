import React from 'react'
import './Projects.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import white_arrow from '../../assets/white-arrow.png'

const Projects = () => {
  return (
    <>
      <div className='projects'>
        <div className="project-icon">
          <img src={gallery_1} alt='' />
          <img src={gallery_2} alt='' />
        </div>

        <div className="project-description"></div>
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

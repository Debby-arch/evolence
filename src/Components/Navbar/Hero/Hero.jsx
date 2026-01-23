import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/dark-arrow.png'


const Hero = () => {
  return (
    <div className='hero container'>
    <div className='hero-text'>
        <h1>Evolve Better. Work Smarter.</h1>
        <p>Evolence helps teams evolve how work gets done-effectively and intelligently.</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
    </div>
      
    </div>
  )
}

export default Hero

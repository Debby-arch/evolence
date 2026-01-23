import React from 'react'
import './Services.css'
import digitization from '../../../assets/digitization.jpg'
import automation from '../../../assets/automation.jpg'
import excel from '../../../assets/excel.jpg'
import design from '../../../assets/design.jpg'

const Services = () => {
  return (
    <div className='services'>
        <div className='service'>
            <img src={digitization} alt=""/>
        </div>
        <div className='service'>
            <img src={automation} alt=""/>
        </div>
        <div className='service'>
            <img src={excel} alt=""/>
        </div>
        <div className='service'>
            <img src={design} alt=""/>
        </div>
    </div>
  )
}

export default Services

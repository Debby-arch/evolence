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
            <div className="caption">
                <img src="" alt=""/>
                <p>School and SME Digitisation</p>
            </div>
        </div>
        <div className='service'>
            <img src={automation} alt=""/>
            <div className="caption">
                <img src="" alt=""/>
                <p>Automation and Operation Support for Founders</p>
            </div>
        </div>
        <div className='service'>
            <img src={excel} alt=""/>
            <div className="caption">
                <img src="" alt=""/>
                <p>Excel, Data and Digital Skills Training</p>
            </div>
        </div>
        <div className='service'>
            <img src={design} alt=""/>
            <div className="caption">
                <img src="" alt=""/>
                <p>UI/UX & MVP Design for Early-Stage Startups</p>
            </div>
        </div>
    </div>
  )
}

export default Services

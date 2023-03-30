import './WorkCard.css'

import React from 'react'
import Ecommerce from '../Assets/intro-bg.jpg'
import { NavLink } from 'react-router-dom'

const WorkCard = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            <div className='project-card'>
                <img src={Ecommerce} alt='ecommerce-image'/>
                <h2 className='project-title'>Project Title</h2>
                <div className='ecommerce-details'>
                    <p>This is the static and responsive web page </p>
                    <div className='ecommerce-btns'>
                        <NavLink to ='url.com'className='btn'>View </NavLink>
                        <NavLink to ='url.com'className='btn'>source </NavLink>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={Ecommerce} alt='ecommerce-image'/>
                <h2 className='project-title'>Project Title</h2>
                <div className='ecommerce-details'>
                    <p>This is the static and responsive web page </p>
                    <div className='ecommerce-btns'>
                        <NavLink to ='url.com'className='btn'>View </NavLink>
                        <NavLink to ='url.com'className='btn'>source </NavLink>
                    </div>
                </div>
            </div>

            <div className='project-card'>
                <img src={Ecommerce} alt='ecommerce-image'/>
                <h2 className='project-title'>Project Title</h2>
                <div className='ecommerce-details'>
                    <p>This is the static and responsive web page </p>
                    <div className='ecommerce-btns'>
                        <NavLink to ='url.com'className='btn'>View </NavLink>
                        <NavLink to ='url.com'className='btn'>source </NavLink>
                    </div>
                </div>
            </div>


        </div>  
    </div>
  )
}

export default WorkCard 

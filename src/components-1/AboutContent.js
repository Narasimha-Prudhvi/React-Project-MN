import './AboutContent.css'

import React from 'react'
import { Link } from 'react-router-dom'
import Introbg from '../Assets/intro-bg.jpg'


const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I..?</h1>
            <p>Iam a react front-end developer. I create a responsive and secure web pages</p>
            <Link to='/Contact'></Link>
            <button className='btn'>Contact</button>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='img-stack top'>
                    <img src={Introbg} className='img' alt='true'></img>
                </div>
                <div className='img-stack bottom'>
                    <img src={Introbg} className='img' alt='true'></img>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default AboutContent 

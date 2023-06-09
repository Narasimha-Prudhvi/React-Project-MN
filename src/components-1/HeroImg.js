import "./HeroImg.css"
import React from 'react'
import IntroImg from '../Assets/intro-bg.jpg'
import {Link} from 'react-router-dom' 

const HeroImg = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="into-img" src= {IntroImg } alt="IntroImg" />
    </div>
    <div className="content">
        <p>HI, THIS IS NARASIMHA</p>
        <h1>REACT DEVELOPER</h1>
        <div>
            <Link to = '/project' className="btn">Projects</Link>
            <Link to = '/Contact' className="btn btn-light">Contact</Link>
        </div>

    </div>
      
    </div>
  )
}

export default HeroImg


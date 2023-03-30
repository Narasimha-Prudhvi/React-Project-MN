import React from 'react'

import Navbar from '../components-1/Navbar'
import Footer from '../components-1/Footer'
import HeroImg2 from '../components-1/HeroImg2'
import AboutContent from '../components-1/AboutContent'

const About = () => {
  return (
    <div>
     <Navbar />
     <HeroImg2 heading='ABOUT.' text='Im a friendly Front-end developer '/>
     <AboutContent />
     <Footer />
    </div>
  )
}

export default About

import React from 'react'
import Navbar from '../components-1/Navbar'
import Footer from '../components-1/Footer'
import HeroImg2 from '../components-1/HeroImg2'
import PricingCard from '../components-1/PricingCard'
import WorkCard from '../components-1/WorkCard'

const Project = () => {
  return (
    <div>
     <Navbar />
     <HeroImg2 heading ='PROJECTS.' text='Some of my recent works' />
     <WorkCard />
     <PricingCard />
     <Footer />
    </div>
  )
}

export default Project 

import React from 'react'

import Navbar from '../components-1/Navbar'
import Footer from '../components-1/Footer'
import HeroImg2 from '../components-1/HeroImg2'
import Form from '../components-1/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='CONTACT.' text='Lets have a chat'/>
      <Form />
     <Footer />
    </div>
  )
}

export default Contact 

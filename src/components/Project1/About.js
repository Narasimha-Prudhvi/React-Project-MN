import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <center>
        <h3>you are in About page.</h3>
        <Link to ='/' className='Link'>Back to Home page</Link> 
      </center>
    </div>
  )
}

export default About;


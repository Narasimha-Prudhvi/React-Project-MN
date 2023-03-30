import './Footer.css'

import React from 'react'

import { FaFacebook, FaHome, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa'
// import { FaEmailBulk } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size= {20} style={{color:'#fff', marginRight: '2rem'}}/>
                <div>
                    <p>12/456 Srikalahasthi-AP.</p>
                    <p>India.</p>
                </div>
                </div>
                <div className='Phone'>
                <h4><FaPhone size= {20} style={{color:'#fff', marginRight: '2rem'}}/>
                +91-7995808134</h4>
                </div>
                {/* <div className='Email'>
                <h4><FaEmailBulk size= {20} style={{color:'#fff', marginRight: '2rem'}}/>
                pnarasimha0049@gmail.com</h4> 
                </div> */}
            </div>

            <div className='Right'>
                <h4>About me</h4>
                <p>This is Narasimha. MBA graduate. I enjoy disussing new projects and design challenges.</p>
                <div className='social'>  
                <FaFacebook size= {30} style={{color:'#fff', marginRight: '1rem'}}/>
                <FaTwitter size= {30} style={{color:'#fff', marginRight: '1rem'}}/>
                <FaLinkedin size= {30} style={{color:'#fff', marginRight: '1rem'}}/>
    
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer 

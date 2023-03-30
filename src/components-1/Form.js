import './Form.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name </label>
            <input type='text'></input>
            <label>Your Email </label>
            <input type='email'></input>
            <label>Password </label>
            <input type='texpasswod'></input>
            <label>Message </label>
            <textarea rows='6' placeholder='enter your message here' />
       <button className='btn'>submit</button> 
       </form>
      
    </div>
  )
}

export default Form

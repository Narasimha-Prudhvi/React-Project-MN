import React from 'react'
import './Color.css'

const Color = () => {
  return (
    <div className='Wrapper'>
       <h1> Background color changer</h1>
       <input type= 'color' onChange={(e)=> {document.body.style.background = e.target.value} }/>
    </div>
  )
}

export default Color


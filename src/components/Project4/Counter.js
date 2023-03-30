import React, { useState } from 'react'
import './Counter.css'



const Counter = () => {

    let [counter,setCounter] = useState(0);
    let stock=10;

  return (
    < >

     <div className='Wrapper'>
      
      <button className='minus' onClick={ ()=> { if( counter > 0){ setCounter(counter-1)}}} >-</button>
      <p>{counter}</p>
      <button className='plus' onClick={ ()=> { if( counter < stock ){ setCounter(counter+1)}}}>+</button>

    </div>
  </>
  
)
    
   

}

export default Counter

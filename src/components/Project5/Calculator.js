import React, { useState } from 'react'
import Keypad from './Keypad'
import './Calculator.css'

function Calculator() {
  let [input,setInput] = useState(' ')
     function handleClick(value){

      setInput(input+value)
       
     }

     function calculate(value){
      let outputVal = eval(input)
      setInput(outputVal)
      
     }

     function handleClear( ){
      setInput( ' ' )
     }


  return (
    <div className='container'>
      <h1>Calculator Using React</h1>
      <div className='calculator'></div>
      <input type='text' value={input} className='output'></input>

      <Keypad handleClick={ handleClick } handleClear={handleClear} calculate={calculate} />
        
    </div>

  )
}

export default Calculator 

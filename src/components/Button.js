
import React, { Component } from 'react'

class Button extends Component {
 render() {
   return (
     <div className="my-4">
       <button type="button" className={`btn ${this.props.color}`}>{this.props.btnLabel}</button>
     </div>
   )
 }
}

export default Button;

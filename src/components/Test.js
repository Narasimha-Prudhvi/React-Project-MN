// import React, { Component } from 'react'
// // import { connect } from 'react-redux'

// export class Test extends Component {
//   render() {
//     return (
//       <div>
//         <center>
//             <h3>name {this.props.name} age {this.props.age}</h3>
//         </center>
//       </div>
//     )
//   }
// }


// export default Test;



import React from "react";

const InnerComponent = ( ) =>{
    return(
       <center> <h3>prudhvi</h3></center>
    )
}

const PrintName = ( ) =>{
    return(
          <InnerComponent />
    )
}


const Test = () =>{
    // const user = {
    //     firstName : "emma",
    //     lastName: "watson"
    // }
    return(
        <>
          <PrintName />
          <PrintName />
          <PrintName />
          <PrintName />
        </>
    )
}

export default Test;

// this is the another way of using components from one components to the another components..... (function components)
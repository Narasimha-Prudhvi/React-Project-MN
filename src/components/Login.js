import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Login extends Component {
//     const Login = ( ) =>{
//   const[data,setData]= useState( {
//         email:'',
//         password:''
//     })
//     }
  
  render() {
    return (
      <div>
        <center>
            <form className="container my-5 ">
                <input type="text" placeholder='e-mail:' /><br /><br />
                <input type="text" placeholder='password:' /><br /><br />
                <input type="button" value="submit" /><br />
            </form>
        </center>
      </div>
    )
  }
}

export default Login;
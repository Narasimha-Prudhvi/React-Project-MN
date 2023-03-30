import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export class Input extends Component {

    constructor(){
        super();
        this.state = {
            inputVal:" ",
            todos: " ",
            todos:[ ]
        }
    }

    handleChange(e){
        this.setState({
           inputVal: e.target.value
        })
    }

    handleClick(){
      const{ todos , inputVal}= this.state;
      todos.push(inputVal);
         this.setState({
            todos:todos,
            inputVal:" "
         })
    }


  render() {
    const{ todos, inputVal } = this.state;
    return (
        <>
      <div className="container my-5 d-flex">
        <input type="text" className='form-control' value={inputVal} onChange={(e)=> this.handleChange(e)}/>
        <button type="button" className="btn btn-primary" onClick={()=>this.handleClick()}>ADD</button>

      </div>
      <ul>
   {todos.map((todos)=>{
    return <li><h3> { todos } </h3></li>
        }
         )}
   </ul>
      </>
    )
  }
}


export default Input;


// Two types of statements are there, they are: controlled statements and un-controlled statements

// 1. the statements which are controlled by ourselves is called controlled statements.    {this.state.inputVal} ----> by this  we can control the statements
// 2. the statements which are not controlled by ourselves is called un-controlled statements.
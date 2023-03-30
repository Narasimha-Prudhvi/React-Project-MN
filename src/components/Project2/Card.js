import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';


class Card extends Component {
  render() {
       console.log(this.props.studentInfo)
    return (
    <div className="container my-2">
        <div className="Card">
            <h3>My name is {this.props.studentInfo.Id}</h3>
            <p>Training name is {this.props.studentInfo.Training}</p>
            <p>Institute Name is {this.props.studentInfo.Institute}</p>
        </div>
     </div>
    )
  }
}

export default Card;

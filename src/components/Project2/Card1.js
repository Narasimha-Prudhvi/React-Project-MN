import React, { Component } from 'react';
import Card from './Card';

 class Card1 extends Component {


  render() {
   const student1 = {
        Id:'Narasimha',
        Training:'React',
        Institute:'ABC'
    }
    const student2 = {
        Id:'Meghana',
        Training:'Java',
        Institute:'ABCD'
    }
    const student3 = {
        Id:'Gokul',
        Training:'CSS',
        Institute:'ABCDE'
    }
    const student4 = {
        Id:'Muthu',
        Training:'JS',
        Institute:'ABCDEF'
    }
    return (
        <div className="container my-2">


         <Card studentInfo={student1}/>

         <Card studentInfo={student2}/>

         <Card studentInfo={student3}/>

         <Card studentInfo={student4}/>
      </div>
    )
  }
}

export default Card1;
import React from 'react'
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <center>
        <h3>Welcome to the Dashboard page</h3>
        <Link to ='/' className='Link'>Back to Home page</Link>
      </center>
    </div>
  )
}

export default Dashboard;




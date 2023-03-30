import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const user= "narasimha";
  return (
    <div>
      <center>
         <h3>Welcome to the Home page</h3>
         <Link to = {`/dashboard/${user}`} className='Link'>Dashboard</Link>      
         <Link to = '/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default Home;




// line no.11 and line no.6 are related to the path-params....
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import About from './About';
import './App1.css';


const App1 = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path ='/' element={<Home />} />
         <Route path = '/dashboard/:name' element={<Dashboard />} />
         <Route path = '/about' element={<About />} />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App1;


//line no.15 is path-params.....

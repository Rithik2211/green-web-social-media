import React from 'react';
import NavBar from '../components/navigation-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Explore, Home, Messages, Notification } from './index';
function LandingPage() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/Explore' element={<Explore/>}></Route>
           <Route path='/Notification' element={<Notification/>}></Route>
           <Route path='/Messages' element={<Messages/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default LandingPage;

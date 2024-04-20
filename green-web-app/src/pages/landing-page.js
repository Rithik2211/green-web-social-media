import React from 'react';
import NavBar from '../components/navigation-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Post, Home, Messages, NFTStore } from './index';
function LandingPage() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
           <Route path='/' element={<Home/>}></Route>
           <Route path='/Post' element={<Post/>}></Route>
           <Route path='/NFTStore' element={<NFTStore/>}></Route>
           <Route path='/Messages' element={<Messages/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default LandingPage;

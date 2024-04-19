import NavBar from '../components/navigation-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Explore, DashBoard, Messages, Notification } from './index';
function LandingPage() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
           <Route path='/' element={<DashBoard/>}></Route>
           <Route path='/Explore' element={<Explore/>}></Route>
           <Route path='/Notification' element={<Notification/>}></Route>
           <Route path='/Messages' element={<Messages/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default LandingPage;

import './App.css';
import LoginModal from './components/common/LoginModal';
import SignUpModal from './components/common/SignUpModal';
import EditProfile from './components/pages/Profile/UserProfile/EditProfile';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/pages/Profile';
import RightSideBar from './components/RightSideBar';
import Settings from './components/pages/Settings';

function App() {
  return (
    <div className="app">
    <Navbar/>
    {/* <Settings/> */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/profile" element={<Profile />} />
    </Routes> 
    <LoginModal/>
    <SignUpModal/>
    <RightSideBar/>
    
    </div>
  );
}

export default App;

import './App.css';
import LoginModal from './components/common/LoginModal';
import SignUpModal from './components/common/SignUpModal';
import Snackbar from './components/common/Snackbar';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/pages/Profile';
import RightSideBar from './components/RightSideBar';
import Settings from './components/pages/Settings';
import BookMarks from './components/pages/Bookmarks';

function App() {
  return (
    <div className="app">
    <Navbar/>
    {/* <Settings/> */}
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/bookmarks" element={<BookMarks/>} />
    </Routes> 
    <LoginModal/>
    <SignUpModal/>
    <RightSideBar/>
    <Snackbar/>
    
    </div>
  );
}

export default App;

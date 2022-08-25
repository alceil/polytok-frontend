import './App.css';
import LoginModal from './components/common/LoginModal';
import SignUpModal from './components/common/SignUpModal';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Home/>
    <LoginModal/>
    <SignUpModal/>
    <RightSideBar/>
    </div>
  );
}

export default App;

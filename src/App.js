import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import RightSideBar from './components/RightSideBar';

function App() {
  return (
    <div className="app">
    <Navbar/>
    <Home/>
    <RightSideBar/>
    </div>
  );
}

export default App;

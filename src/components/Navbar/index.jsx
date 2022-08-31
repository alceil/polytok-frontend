import React from 'react'
import NavItem from './NavItem'
import './styles.css'
import {BiHome,BiUser,BiCog} from 'react-icons/bi';
import AuthButton from './AuthButton';
import NavUserDetails from './NavUserDetails';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.isUserLoggedIn);

  return (
    <div class="sidebar">
      <img src="https://bit.ly/3dPwSv9" alt="Logo" width="50px"/>


      <Link to="/"><NavItem icon={<BiHome />} name="Home"/></Link>
<Link to="/profile"><NavItem icon={<BiUser />} name="Profile"/></Link>
<Link to='/settings'><NavItem icon={<BiCog />} name="Settings"/></Link>
<NavItem icon={<BiUser />} name="Notifications"/>
{
isUserLoggedIn?<NavUserDetails/>:<AuthButton/>

}
      {/* <div class="sidebarRow">
        <span class="material-icons">people</span>
        <h4>Profile</h4>
      </div>
<div class="sidebarRow">
    <span class="material-icons">notifications</span>
    <h4>Notifications</h4>
  </div>
    <div class="sidebarRow">
      <span class="material-icons">settings</span>
      <h4>Settings</h4>
    </div> */}
  </div>
  )
}

export default Navbar
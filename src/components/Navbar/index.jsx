import React from 'react'
import NavItem from './NavItem'
import './styles.css'
import {BiHome,BiUser,BiCog} from 'react-icons/bi';
import AuthButton from './AuthButton';
const Navbar = () => {
  return (
    <div class="sidebar">
      <img src="https://bit.ly/3dPwSv9" alt="Logo" width="50px"/>

<NavItem icon={<BiHome />} name="Home"/>
<NavItem icon={<BiUser />} name="Profile"/>
<NavItem icon={<BiUser />} name="Notifications"/>
<NavItem icon={<BiCog />} name="Settings"/>
<AuthButton/>
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
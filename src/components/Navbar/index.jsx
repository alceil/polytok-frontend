import React from 'react'
import NavItem from './NavItem'
import './styles.css'
import {BiHome,BiUser,BiCog} from 'react-icons/bi';
import AuthButton from './AuthButton';
import NavUserDetails from './NavUserDetails';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  return (
    <div class="sidebar">
      <img src="https://bit.ly/3dPwSv9" alt="Logo" width="50px"/>


      <Link style={{textDecoration:'none',color:'black'}} to="/"><NavItem icon={<BiHome />} name="Home"/></Link>
<Link style={{textDecoration:'none',color:'black'}} to="/profile">
<NavItem 
isLoginRequired 
icon={<BiUser />} 
name="Profile"/>
</Link>
<Link style={{textDecoration:'none',color:'black'}} to='/settings'>
  <NavItem 
  icon={<BiCog />} 
  name="Settings"/>
  </Link>
<NavItem 
icon={<BiUser />} 
name="Notifications"/>
{
isUserLoggedIn?<NavUserDetails/>:<AuthButton/>
}
  </div>
  )
}

export default Navbar
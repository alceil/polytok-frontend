import React from 'react'
import NavItem from './NavItem'
import './styles.css'
import {BiHome,BiUser,BiCog} from 'react-icons/bi';
import {MdBookmark} from 'react-icons/md';
import AuthButton from './AuthButton';
import NavUserDetails from './NavUserDetails';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  const navLinkArray =  [
      {
        icon: <BiHome />,
        name: 'Home',
        route: '/',
        isLoginRequired: false,
      },
      {
        icon: <BiUser />,
        name: 'Profile',
        route: `/profile`,
        isLoginRequired: true,
      },
      {
        icon: <BiCog />,
        name: 'Settings',
        route: '/settings',
        isLoginRequired: false,
      },
      {
        icon: <MdBookmark />,
        name: 'Bookmarks',
        route: '/bookmarks',
        isLoginRequired: true,
      },
    ];


  return (
    <div class="sidebar">
  <div className='logo'>
  <img src="https://bit.ly/3dPwSv9" alt="Logo" width="50px" />

  </div>

  {navLinkArray.map((navLink) => (
              <NavItem {...navLink} key={navLink.route} />
            ))}
      {/* <Link style={{textDecoration:'none',color:'black'}} to="/"><NavItem icon={<BiHome />} name="Home"/></Link>
<NavItem 
isLoginRequired 
icon={<BiUser />} 
name="Profile"
route="/profile"
/>
<Link style={{textDecoration:'none',color:'black'}} to='/settings'>
  <NavItem 
  icon={<BiCog />} 
  name="Settings"/>
  </Link>
  <Link style={{textDecoration:'none',color:'black'}} to='/bookmarks'>
  <NavItem 
icon={<MdBookmark />} 
name="Bookmarks"/>
  </Link> */}

{
isUserLoggedIn?<NavUserDetails/>:<AuthButton/>
}
  </div>
  )
}

export default Navbar